import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './ResetPassword.css';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBInput,MDBBtn} from 'mdb-react-ui-kit';
import {useFormik} from 'formik';

import Axios from 'axios'

const ResetPassword=()=>

{
<<<<<<< HEAD
    const [error,setError]=useState("");
    const [success,setSuccess]=useState("");

=======
    const [getToken,setGetToken]=useState("");
>>>>>>> 8b65d53c0426304c731e3e4a629d6835febee189
    const Formik=useFormik({
        initialValues:{
            email:'',
        },onSubmit(values)
        {
            Axios.post('http://localhost:5000/reset-password',{
                email:values.email,
            }).then((res)=>
            {
<<<<<<< HEAD
                console.log(res.data);
                setSuccess("Please check your email.")
            }).catch((err)=>
            {
                // console.log(err.response.data.error);
                setError(err.response.data.error)
=======
                window.localStorage.setItem('token',JSON.stringify(res.data));
                console.log(res.data);
                setGetToken(res.data);
>>>>>>> 8b65d53c0426304c731e3e4a629d6835febee189
            })
        }
    })
    return <div className='reset-form mt-5'>
            <Container className=''>
            <h1>Forget Password</h1>
             <form onSubmit={Formik.handleSubmit} id='reset-form'>
            <Row>
                <Col lg={12}>
                <MDBInput placeholder='Email' className='w-50 submit-field mt-5' type='email' name='email' value={Formik.values.email} onChange={Formik.handleChange}></MDBInput>
                </Col>
                <Col lg={12}>
<<<<<<< HEAD
                {error?<p className='error-class'>{error}</p>:null}
                {success?<p className='success-class'>{success}</p>:null}
=======
                {/* {error?<p className='error-class'>{error}</p>:null}
                {success?<p className='success-class'>{success}</p>:null} */}
>>>>>>> 8b65d53c0426304c731e3e4a629d6835febee189
                </Col>
                <Col lg={12}>
                <MDBBtn type='submit' className='submit-btn mt-5'>Submit</MDBBtn>
                </Col>
                <Col className='mt-5'>
                    {getToken.result? <a>Test</a>:null}
                </Col>
            </Row>
            </form>
<<<<<<< HEAD
=======
            <Link to={`newpassword/${getToken._id}`}>
                        <MDBBtn variant="primary" className='m-1'>Edit</MDBBtn>
            </Link>
>>>>>>> 8b65d53c0426304c731e3e4a629d6835febee189
            </Container>
    </div>
}

export default ResetPassword;