import React, {useEffect,useState} from 'react'
import Attendees from './Attendees'
import {Container, Card, CardBody, CardHeader, CardText, Col, CardImg, Button, Row } from "reactstrap";
import axios from 'axios'
const PotluckDetail = ()=>{
    const [PotluckDetail, setPotluckDetail] = useState([])

    useEffect(()=>{
        axios.get('https://potluck-server.herokuapp.com/api/potlucks')
        .then(firstResponse => {
            console.log("Details baby details",firstResponse)
            setPotluckDetail(firstResponse.data) 

       


        })


            .catch(error => console.log('Error!',error))
        },[])





    return(
        <div>
             <Container className='Contain-try'>
        <Row className='row' xs='0.5'>
                <Card className='contain-try2' body inverse style={{ backgroundColor: '#a7632f', borderColor: 'B5854E' }}>
                        <CardHeader tag="h2">Attendees</CardHeader> 
                                  {PotluckDetail.map(users=>(
                <Attendees users ={users} />
            ))}
                                   
                </Card>
        </Row>
    </Container>
            
        </div>
    )
}
export default PotluckDetail