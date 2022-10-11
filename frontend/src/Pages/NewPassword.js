import react,{useEffect,useState} from 'react'
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBInput,MDBBtn} from 'mdb-react-ui-kit';
<<<<<<< Updated upstream
const NewPassword=()=>
{
    const [getData,setGetdata]=useState("");
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
=======
import Button from 'react-bootstrap/Button';
import {useParams,Navigate} from 'react-router-dom';
import validator from 'validator'
const NewPassword=()=>
{
    const [newPassword,setNewPassword]=useState("");
    const [confirmPassword,setconfirmPassword]=useState("");
    const [userData,setGetdata]=useState([]);
    const [error,setError]=useState("");
    const {id}=useParams();
    const storeData=JSON.parse(localStorage.getItem('token'));
    const passwordLength=7;
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
                    if(newPassword!==confirmPassword)
                    {
                        setError("Password is not matched")
                    }
                    else 
                    {
                        Axios.put(`http://localhost:5000/resetPasswordUser/`,{
                            id:storeData.userID,
                            newPassword:newPassword
                        })
                        Navigate('/login')
                    }
                }
                
>>>>>>> Stashed changes
    return <div>
        <form >
        <Container className=''>
            <h1>Forget Password</h1>
            <Row>
                <Col lg={12}>
<<<<<<< Updated upstream
                <MDBInput placeholder='Password' className='w-50 submit-field mt-5' type='text'></MDBInput>
=======
                <MDBInput placeholder='Password' className='w-50 submit-field mt-5' type='password' onChange={(event)=>
                    {
                        setNewPassword(event.target.value);
                    }} />
>>>>>>> Stashed changes
                </Col>
                <Col lg={12}>
                <MDBInput placeholder='Confirm' className='w-50 submit-field mt-5' type='password' onChange={(event)=>
                    {
                        setconfirmPassword(event.target.value);
                    }} />
                </Col>
                <Col lg={12}>
<<<<<<< Updated upstream
                <MDBBtn type='submit' className='submit-btn mt-5'>Submit</MDBBtn>
=======
                {error?<p className='error-class'>{error}</p>:null}
                <Button className='m-2' onClick={()=>updateData(storeData.userID)}>Sumbit</Button>
>>>>>>> Stashed changes
                </Col>
            </Row>
            </Container>
        </form>
    </div>
}

export default NewPassword;