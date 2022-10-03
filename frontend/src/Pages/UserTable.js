import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { MDBTable, MDBTableHead, MDBTableBody,MDBInput } from 'mdb-react-ui-kit';
import Axios from 'axios';
import {useFormik} from 'formik';

const UserTable=()=>
{

    return <div>
                <h1 className='mt-5'>User Information</h1>
                <MDBInput id='form1' type='text' className='m-5 w-25' placeholder='Search information'/>
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
                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
    </div>
}
export default UserTable;