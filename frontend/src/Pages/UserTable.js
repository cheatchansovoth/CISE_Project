import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { MDBTable, MDBTableHead, MDBTableBody,MDBInput} from 'mdb-react-ui-kit';
import Axios from 'axios';
import {Link} from 'react-router-dom';
const UserTable=()=>
{
    const [userList,setUserList]=useState([]);

    useEffect(()=>
    {
        Axios.get("http://localhost:5000/userinformation").then((response)=>
        {
            setUserList(response.data);
        })
    },[])
    
    const Delete=(id)=>
    {
        Axios.delete(`http://localhost:5000/deleteuser/${id}`);
    }
    const Getdata=(id)=>
    {
        Axios.get(`http://localhost:5000/finduser/${id}`);
    }

    return <div>
                <h1 className='mt-5'>User Information</h1>
                <MDBInput id='form1' type='text' className='w-25 m-3 text-center' placeholder='Search' />
                <MDBTable>
            <MDBTableHead dark>
                    <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Password</th>
                    <th scope='col'>Moderators</th>
                    <th scope='col'>Admin</th>
                    <th scope='col'>Action</th>
                    </tr>
            </MDBTableHead>
            <MDBTableBody>
              {userList.map((val,key)=>
                {
                    return<tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.password}</td>
                    <td>{val.isAdmin}</td>
                    <td>{val.isModerators}</td>
                    <td>
                        <Link to={`finduser/${val._id}`}>
                        <Button variant="primary" className='m-1'>Edit</Button>
                        </Link>
                        <Button variant="danger" onClick={()=>Delete(val._id)}>Remove</Button>
                        </td>
                  </tr>
                })}
      </MDBTableBody>
    </MDBTable>
    </div>
}
export default UserTable;