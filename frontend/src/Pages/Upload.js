import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useFormik} from 'formik';
import { basicSchema } from "../schema/index";

import "./Register.css"
import {
    MDBBtn,
    MDBContainer,
    MDBInput,
  }
  from 'mdb-react-ui-kit';
import Axios from 'axios';

const Upload=()=>
{

    const Formik=useFormik(
        {
            initialValues:
            {
                title:"",
                authors:"",
                source:"",
                pubyear:"",
                doi:"",
                claim:"",
                evidence:""

            },onSubmit:(values)=>
            {
                Axios.post('http://localhost:5000/post-article',{
                    title:values.title,
                    authors:values.authors,
                    source:values.source,
                    pubyear:values.pubyear,
                    doi:values.doi,
                    claim:values.claim,
                    evidence:values.evidence
                }).then(res=>
                    {
                        console.log(res);
                    }).catch(err=>{
                        console.log(err);
                })
                console.log(values)
            }
        }
    )
    return <div>
        <h1 className='mt-5 mb-3'>Publish Article</h1>
        <MDBContainer>
        <form onSubmit={Formik.handleSubmit}>
        <MDBInput placeholder='Title' id='typeText' type='text' className='text-center mb-2' name='title' onChange={Formik.handleChange}/>
        <MDBInput placeholder='Authors' id='typeText' type='text' className='text-center mb-2' name='authors' onChange={Formik.handleChange}/>
        <MDBInput placeholder='Source' id='typeText' type='text' className='text-center mb-2' name='source'  onChange={Formik.handleChange}/>
        <MDBInput placeholder='Publish Year' id='typeText' type='date' className='text-center mb-2' name='pubyear' onChange={Formik.handleChange} />
        <MDBInput placeholder='DOI' id='typeText' type='text' className='text-center mb-2' name='doi'  onChange={Formik.handleChange}/>
        <MDBInput placeholder='Claim' id='typeText' type='text' className='text-center mb-2' name='claim' onChange={Formik.handleChange}/>
        <MDBInput placeholder='Evidence' id='typeText' type='text' className='text-center mb-2' name='evidence' onChange={Formik.handleChange} />
        <MDBBtn type='submit'>Submit</MDBBtn>
        </form>
        </MDBContainer>
    </div>
}

export default Upload;