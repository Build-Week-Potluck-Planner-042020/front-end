import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText,  Container, Row, Col } from 'reactstrap';

const PotluckCard = props =>{
    const{push}= useHistory()
    const {item} = props

    let styles3 ={textDecoration:'none'}
    // console.log(props)
    return(
        <Container >
            
                <Link to={`/PotluckPage/${item.id}`}>
                                    
                    <Card className='PLCard'>
                        <CardBody>
                            
                            <CardHeader>{item.name}</CardHeader> 
                            <CardText>
                                
                                    <div style={styles3}>{item.location}</div>
                                    <time>{item.date}</time>
                                    <div></div>
                                    <time>{item.time}</time>
                                </CardText>
                                    
                        </CardBody>
                    </Card>
                
           </Link>
            </Container>
    )
}
export default PotluckCard