import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ApproveArticle=()=>
{
    const {id}=useParams();
    const [userData,setGetdata]=useState([]);
    useEffect(()=>
    {
        Axios.get(`http://localhost:5000/bookdetails/${id}`).then((response)=>
        {
            setGetdata(response.data.BookDetails);
        })
    },[])
    const updateData=()=>
    {
            Axios.put(`http://localhost:5000/updateStatus/`,{
            id:id,
        })
    }
    const Delete=(id)=>
    {
        Axios.post(`http://localhost:5000/removearticle`,{
             title:userData.title,
             authors:userData.authors,
             source:userData.source,
             pubyear:userData.pubyear,
             doi:userData.doi,
             claim:userData.claim,
             evidence:userData.evidence, 
        })
        Axios.delete(`http://localhost:5000/deleteBook/${id}`);
    }
    return (<div>
                            <Card className='mt-3'>
                            <Card.Body ><h5>{userData.title}</h5>
                            <p><i>{userData.authors}</i></p>
                            <p><i>{userData.pubyear}</i></p>
                            <Button variant="primary" className='m-1' onClick={()=>updateData(userData._id)}>Approve</Button>
                            <Button variant="primary" className='m-1' onClick={()=>Delete(userData._id)}>Delete</Button>
                            </Card.Body>
                          </Card>
     </div>)
}

export default ApproveArticle;