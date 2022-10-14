import React,{useEffect,useState} from 'react'
import Axios from 'axios';
import { Container,Row,Col } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBInput,MDBBtn} from 'mdb-react-ui-kit';
const NewPassword=()=>
{
    const [newPassword,setNewPassword]=useState("");
    const [confirmPassword,setconfirmPassword]=useState("");
    const [userData,setGetdata]=useState([]);
    const [tokenID,settokenID]=useState("");
    const [newName,setNewName]=useState("");
    const {id}=useParams();
    const {token}=useParams();
    useEffect(()=>
    {
        Axios.get(`http://localhost:5000/reset-password/${id}/:${token}`).then((response)=>
        {
            setGetdata(response.data);
            console.log(response.data);
        })
    },[])
    return <div>
        <form >
        <Container className=''>
            <h1>Forget Password</h1>
            <Row>
                <Col lg={12}>
                <MDBInput placeholder='Password' className='w-50 submit-field mt-5' type='text'></MDBInput>
                </Col>
                <Col lg={12}>
                <MDBInput placeholder='Confirm' className='w-50 submit-field mt-5' type='password' onChange={(event)=>
                    {
                        setconfirmPassword(event.target.value);
                    }} />
                </Col>
                <Col lg={12}>
                <MDBBtn type='submit' className='submit-btn mt-5'>Submit</MDBBtn>
                </Col>
            </Row>
            </Container>
        </form>
    </div>
}

export default NewPassword;