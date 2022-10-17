import React , { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Axios from 'axios';
import { Col, Container,Row } from 'react-bootstrap';

const CartContent=()=>
{

    const [cardDetails,setCardDetails]=useState([]);
    useEffect(()=>
    {
        Axios.get("http://localhost:5000/cardinformation").then((response)=>
        {
            setCardDetails(response.data);
            console.log(response.data)
        })
    },[])
    return (
        <div>
            <h1>SPEED DB</h1>
            <div className='.Card'>
            <Container>
            <Row>
                {cardDetails.map((val,key)=>
                    {
                        return(
                            <Card>
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