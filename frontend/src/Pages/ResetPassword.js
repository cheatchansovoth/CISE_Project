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
<<<<<<< Updated upstream
    const [getToken,setGetToken]=useState("");
=======
    const [error,setError]=useState("");
    const [success,setSuccess]=useState("");

>>>>>>> Stashed changes
    const Formik=useFormik({
        initialValues:{
            email:'',
        },onSubmit(values)
        {
            Axios.post('http://localhost:5000/reset-password',{
                email:values.email,
            }).then((res)=>
            {
                console.log(res.data);
<<<<<<< Updated upstream
                setGetToken(res.data);
=======
                setSuccess("Please check your email.")
            }).catch((err)=>
            {
                // console.log(err.response.data.error);
                setError(err.response.data.error)
>>>>>>> Stashed changes
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
                {error?<p className='error-class'>{error}</p>:null}
                {success?<p className='success-class'>{success}</p>:null}
                </Col>
                <Col lg={12}>
                <MDBBtn type='submit' className='submit-btn mt-5'>Submit</MDBBtn>
                </Col>
                <Col className='mt-5'>
                    {getToken.result? <a>Test</a>:null}
                </Col>
            </Row>
            </form>
            </Container>
    </div>
}

export default ResetPassword;