import React,{useState,useEffect} from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Axios from 'axios'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Moderator=()=>
{
    const [pendingList,setPendingList]=useState([]);
    const storeData=JSON.parse(localStorage.getItem('token'));

    if(!storeData)
    {
      window.location.href='/login'
    }
      useEffect(()=>
      {
        if(storeData.isAdmin=='true' || storeData.isModerators=='true')
        {
                  Axios.get("http://localhost:5000/mod/pendinglist").then((response)=>
                  {
                      setPendingList(response.data);
                  })
        }
        else 
        {
          window.location.href='/login'
        }
      },[])

    return (<div>
        <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Authors</th>
          <th scope='col'>Source</th>
          <th scope='col'>Publish Year</th>
          <th scope='col'>DOI</th>
          <th scope='col'>Claim</th>
          <th scope='col'>Evidence</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {pendingList.map((val,key)=>
                {
                    return<tr key={key}>
                    <td>{val.title}</td>
                    <td>{val.authors}</td>
                    <td>{val.source}</td>
                    <td>{val.pubyear}</td>
                    <td><a href={val.doi}>Source</a></td>
                    <td>{val.claim}</td>
                    <td>{val.evidence}</td>
                    <td>
                        <Link to={`update/${val._id}`}>
                        <Button variant="primary" className='m-1'>Action</Button>
                        </Link>
                    </td>
                  </tr>
                  
                })}
      </MDBTableBody>
    </MDBTable>
    </div>)
}

export default Moderator;
