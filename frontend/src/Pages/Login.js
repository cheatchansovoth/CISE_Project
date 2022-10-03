import React from 'react';
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
import './Login.css';

const Login=()=>
{

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
                }).then(res=>alert('User is found')
                  ).catch(err=>{alert('Given invalid data');
                })
                console.log(values)
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
              {Formik.errors.email &&Formik.touched.email ? <p>{Formik.errors.email}</p>:null}
              <MDBInput wrapperClass='mb-4'placeholder='Password' id='form2' type='password' name='password' value={Formik.values.password} onChange={Formik.handleChange}/>
              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

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