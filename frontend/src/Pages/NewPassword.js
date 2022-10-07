import React,{useEffect,useState} from 'react'
import Axios from 'axios';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBInput,MDBBtn} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import {useParams} from 'react-router-dom';
const NewPassword=()=>
{
    const [newPassword,setNewPassword]=useState("");
    const [confirmPassword,setconfirmPassword]=useState("");
    const [userData,setGetdata]=useState([]);
    const [tokenID,settokenID]=useState("");
    const [newName,setNewName]=useState("");
    const {id}=useParams();
    const storeData=JSON.parse(localStorage.getItem('token'));
        useEffect(()=>
        {

            if(!storeData)
            {
                window.location.href='/'
            }
            else if (id!=storeData.userID){
                window.location.href='/'
            }
            Axios.get(`http://localhost:5000/finduser/${id}`).then((response)=>
            {
                setGetdata(response.data.User);
                // // console.log(response.data);
                // // console.log(response.data.User);
                // console.log("This is response "+storeData.userID);
                // console.log("This is ID"+ id) 
            })
         },[])
                const updateData=()=>
                {
                    Axios.put(`http://localhost:5000/resetPasswordUser/`,{
                        id:storeData.userID,
                        newPassword:newPassword
                    })
                }
                
    return <div>
        <form >
        <Container className=''>
            <h1>Forget Password</h1>
            <Row>
                <Col lg={12}>
                <MDBInput placeholder='Password' className='w-50 submit-field mt-5' type='text' onChange={(event)=>
                    {
                        setNewPassword(event.target.value);
                    }} />
                </Col>
                <Col lg={12}>
                <MDBInput placeholder='Confirm' className='w-50 submit-field mt-5' type='text'></MDBInput>
                </Col>
                <Col lg={12}>
                <Button className='m-2' onClick={()=>updateData(storeData.userID)}>Modify</Button>
                </Col>
            </Row>
            </Container>
        </form>
    </div>
}

export default NewPassword;