import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useFormik} from 'formik';
import { basicSchema } from "../schema/index";

import "./stylesheet/Register.css"
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import Axios from 'axios';

const Register=()=>
{

    const Formik=useFormik(
        {
            initialValues:
            {
                name:"",
                email:"",
                password:"",
                confirm:""
            },validationSchema:basicSchema
            ,onSubmit:(values)=>
            {
                Axios.post('http://localhost:5000/register',{
                    name:values.name,
                    email:values.email,
                    password:values.password
                }).then(res=>alert('User is inserted')
                  ).catch(err=>{alert('User is exit');
                })
            }
        }
    )
    return <div>
        <MDBContainer className='d-flex align-items-center justify-content-center bg-image'>
      <div className='mask gradient-custom-3'></div>
      <form onSubmit={Formik.handleSubmit}>
         <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Register</h2>
          <MDBInput wrapperClass='mb-4' placeholder='Your Name' size='lg' id='form1' type='text' name='name' className={`${Formik.touched.name && Formik.errors.name}`} value={Formik.values.name} onChange={Formik.handleChange}/>
          {Formik.errors.name &&Formik.touched.name ? <p className=' error-class'>{Formik.errors.name}</p>:null}
          <MDBInput wrapperClass='mb-4' placeholder='Email' size='lg' id='form2' type='email' name='email' className={`${Formik.touched.email && Formik.errors.email}`} value={Formik.values.email} onChange={Formik.handleChange}/>
          {Formik.errors.email &&Formik.touched.email ? <p className=' error-class'>{Formik.errors.email}</p>:null}
          <MDBInput wrapperClass='mb-4' placeholder='Password' size='lg' id='form3' type='password' name='password' className={`${Formik.touched.password && Formik.errors.password}`} value={Formik.values.password} onChange={Formik.handleChange}/>
          {Formik.errors.password &&Formik.touched.password ? <p className=' error-class'>{Formik.errors.password}</p>:null}
          <MDBInput wrapperClass='mb-4' placeholder='Confirm' size='lg' id='form4' type='password' name='confirm' className={`${Formik.touched.confirm && Formik.errors.confirm}`} value={Formik.values.confirm} onChange={Formik.handleChange}/>
          {Formik.errors.confirm &&Formik.touched.confirm ? <p className=' error-class'>{Formik.errors.confirm}</p>:null}
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' color='dark' type="submit">Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </form>
    </MDBContainer>
    </div>
}

export default Register;