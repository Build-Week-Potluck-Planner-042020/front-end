import React from 'react'
import {Container, Card, CardBody, CardHeader, CardText, Col, CardImg, Button, Row } from "reactstrap";

const Attendees = props =>{

    const {users} = props

    return(
     <CardBody>
                        <CardText>{users.username}</CardText>
                        
            
                        </CardBody>
              
    )
}


export default Attendees