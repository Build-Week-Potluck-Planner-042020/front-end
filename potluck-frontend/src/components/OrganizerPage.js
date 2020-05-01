import React, { useState } from 'react'
import {connect} from 'react-redux'
import { Container, Row, Col } from 'reactstrap';

import {addPotluck} from '../store/actions/dashActions'
import { useHistory } from 'react-router-dom'

const OrganizerPage = (props) => {
    const {push}= useHistory()
    const [newPotluck, setNewPotluck] = useState({
        date:'', 
        host:'', 
        location:'', 
        name:'', 
        time:'',
    })

    const changeHandler = (e) => {
        e.preventDefault()
        setNewPotluck({...newPotluck, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.addPotluck(newPotluck)
        setNewPotluck({
            date:'', 
            host:'', 
            location:'', 
            name:'', 
            time:'',
        })
        push('/Dashboard')
    }
    return (
        
        <div>
            <h1>Create your potluck</h1>
            <Container>
            <form onSubmit={submitHandler}>
            <Col>
                <input
                    type="text"
                    name="date"
                    placeholder="date"
                    value={newPotluck.date}
                    onChange={changeHandler}
                />
                </Col>
                <Col>
                <input
                    type="text"
                    name="host"
                    placeholder="host"
                    value={newPotluck.host}
                    onChange={changeHandler}
                />
                </Col>
                <input
                    type="text"
                    name="location"
                    placeholder="location"
                    value={newPotluck.location}
                    onChange={changeHandler}
                />
                <Col>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={newPotluck.name}
                    onChange={changeHandler}
                />
                </Col>
                <Col>
                <input
                    type="text"
                    name="time"
                    placeholder="time"
                    value={newPotluck.time}
                    onChange={changeHandler}
                />
                </Col>
                <button type='submit'>Submit Potluck</button>
            </form>
            </Container>
            </div>
    )
}

const mapStateToProps = state => {
    // console.log(state)
    return {
      state:state.dashboard.potlucks
    };
  };

export default connect(
    mapStateToProps,
    {addPotluck})(OrganizerPage)