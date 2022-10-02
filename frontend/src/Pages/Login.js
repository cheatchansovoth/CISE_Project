import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
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
    return (
<MDBContainer className='login-section'>
      <MDBCard >
        <MDBRow className='g-0 d-flex align-items-center'>
          <MDBCol md='4'>
            <MDBCardImage src='https://cdni.iconscout.com/illustration/premium/thumb/boy-doing-homework-5796181-4841276.png' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>
              <h1>Login</h1>
              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-50"  color='dark'>Sign in</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
      }
export default Login;