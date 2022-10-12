import {React,useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { MDBInput} from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import {useFormik} from 'formik';
import './FindUser.css'
const Finduser=()=>
{
    const {id}=useParams();
    const [userData,setGetdata]=useState([]);
    const [newName,setNewName]=useState("");
    const [newPassword,setNewPassword]=useState("");

    useEffect(()=>
    {
        Axios.get(`http://localhost:5000/finduser/${id}`).then((response)=>
        {
            setGetdata(response.data.User);
            console.log(response.data.User);
        })
    },[])
    const updateData=()=>
    {
            Axios.put(`http://localhost:5000/updateUser/`,{
            id:id,
            newName:newName,
            newPassword:
            newPassword
        })
    }
    return <div className='modify-section'>
             <h1>Modify User</h1>
            <form className='modify-user-form'  >  
            <MDBInput id='form1' type='text' className='w-25 m-3 text-center'  placeholder={userData.name || 'Name'} onChange={(event)=>
            {
                setNewName(event.target.value);
            }} />
            <MDBInput id='form1' type='text' className='w-25 m-3 text-center' value={userData.email} />
            <MDBInput id='form1' type='text' className='w-25 m-3 text-center' placeholder={userData.password || 'Password'}  onChange={(event)=>
            {
                setNewPassword(event.target.value);
            }}
            />
            <MDBInput id='form1' type='text' className='w-25 m-3 text-center' value={userData.isAdmin} />
            <MDBInput id='form1' type='text' className='w-25 m-3 text-center' value={userData.isModerators} />
            <div className='button-modity'>
            <Button className='m-2' onClick={()=>updateData(userData._id)}>Modify</Button>
            <Button >Back</Button>
            </div>
            </form>
         </div>
}

export default Finduser;