import React, { useState } from 'react'
import {connect} from 'react-redux'

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
    const [newItems, setNewItems]=useState({

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
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="date"
                    placeholder="date"
                    value={newPotluck.date}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="host"
                    placeholder="host"
                    value={newPotluck.host}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="location"
                    value={newPotluck.location}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={newPotluck.name}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="time"
                    placeholder="time"
                    value={newPotluck.time}
                    onChange={changeHandler}
                />
                <h2>items for potluck</h2>
                <button type='submit'>Submit Potluck</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
      state:state.dashboard.potlucks
    };
  };

export default connect(
    mapStateToProps,
    {addPotluck})(OrganizerPage)