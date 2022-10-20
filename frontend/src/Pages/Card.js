import React , { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Axios from 'axios';
import { Col, Container,Row } from 'react-bootstrap';

const CartContent=()=>
{

    const [cardDetails,setCardDetails]=useState([]);
    const [search,setSearch]=useState("");
    useEffect(()=>
    {
        Axios.get("http://localhost:5000/cardinformation").then((response)=>
        {
            setCardDetails(response.data);
        })
    },[])
    return (
        <div className='mt-5'>
            <h1>Search Article</h1>
            <input type='text' onChange={(event)=>
            {
                setSearch(event.target.value);
            }}></input>
            <div className='.Card'>
            <Container>
            <Row>
                {cardDetails.filter((val)=>
                {
                    let searchAuthor=val.authors.toLowerCase().includes(search.toLocaleLowerCase())
                    let searchTitle=val.title.toLowerCase().includes(search.toLocaleLowerCase())
                    if(search=="")
                    {
                        return val
                    }
                    else if ( searchAuthor|| searchTitle)
                    {
                        return val
                    }
                }).map((val,key)=>
                    {
                        return(
                            <Card key={key}>
                            <Card.Body><h5>{val.title}</h5>
                            <p><i>{val.authors}</i></p>
                            <p><i>{val.pubyear}</i></p>
                            <Card.Link href={val.doi}>Source</Card.Link>
                            </Card.Body>
                          </Card>
                        )
                    })}
            </Row>
                </Container>
            </div>
        </div>
        
    )
}
export default CartContent;