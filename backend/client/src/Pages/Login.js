import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import {useFormik} from 'formik';
import { login } from "../schema/index";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './stylesheet/Login.css';

const Login=()=>
{

  const [error,setError]=useState("");
    const Formik=useFormik(
        {
            initialValues:
            {
                email:"",
                password:"",
            },validationSchema:login
            ,onSubmit:(values)=>
            {
                Axios.post('http://localhost:5000/login',{
                    email:values.email,
                    password:values.password
                }).then((response)=>{
                  if(response.data.isAdmin==='false')
                  {
                    window.localStorage.setItem('token',JSON.stringify(response.data));
                    window.location.href='/upload';
                  }
                  else 
                  {
                  window.localStorage.setItem('token',JSON.stringify(response.data));
                  window.location.href='/usertable';
                  }
                }).catch((err)=>
                {
                  setError("Invalid username and password")
                  console.log(err.message);
                })
            }
        }
    )
    return (
<MDBContainer className='login-section'>
      <MDBCard >
        <MDBRow className='g-0 d-flex align-items-center'>
          <MDBCol md='4'>
            <MDBCardImage src='https://cdni.iconscout.com/illustration/premium/thumb/boy-doing-homework-5796181-4841276.png' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <form onSubmit={Formik.handleSubmit}>
            <MDBCardBody>
              <h1>Login</h1>
              <MDBInput wrapperClass='mb-4' placeholder='Email address' id='form1' type='email' name='email' className={`${Formik.touched.email && Formik.errors.email}`} value={Formik.values.email} onChange={Formik.handleChange}/>
              {Formik.errors.email &&Formik.touched.email ? <p className=' error-class'>{Formik.errors.email}</p>:null}
              <MDBInput wrapperClass='mb-4'placeholder='Password' id='form2' type='password' name='password' value={Formik.values.password} onChange={Formik.handleChange}/>
              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="/resetpassword">Forgot password?</a>
              </div>
              {error?<p className='error-class'>{error}</p>:null}
              <MDBBtn className="mb-4 w-50"  color='dark' type='submit'>Sign in</MDBBtn>

            </MDBCardBody>
            </form>
          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
      }
export default Login;