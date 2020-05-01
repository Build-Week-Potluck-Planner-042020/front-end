import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

import {putPotluck, getPotluckById} from '../store/actions/dashActions'
import { useHistory } from 'react-router'


const EditPotluckForm = (props) => {
    // const {id,name, date, time, location, host}=props.details
    const {push}= useHistory()
    const [editPotluck, setEditPotluck] = useState({})
    useEffect(() => {
        setEditPotluck(props.details);
    }, [props])
    // console.log(props.details)
    // console.log(editPotluck.name)

    const submitHandler= (e)=>{
        e.preventDefault()
        // axiosWithAuth()
        // .put(`/api/colors/${props.details.id}`, colorToEdit)
        // .then(res=>{console.log(res)})
        // .catch(err=>{console.log(err)})
        // getColors()
        // console.log('submiting this ' , editPotluck)
        props.putPotluck(editPotluck)
        props.getPotluckById(props.details.id)
        // push(`/PotluckPage/${editPotluck.id}`)
    }
    const changeHandler= (e)=>{
        e.preventDefault()
        setEditPotluck({...editPotluck, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="date"
                    placeholder="date"
                    value={editPotluck.date}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="host"
                    placeholder="host"
                    value={editPotluck.host}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="location"
                    value={editPotluck.location}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={editPotluck.name}
                    onChange={changeHandler}
                />
                <input
                    type="text"
                    name="time"
                    placeholder="time"
                    value={editPotluck.time}
                    onChange={changeHandler}
                />
                <button type='submit'>submit changes</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        details: state.dashboard.currentPotluck
    };
};

export default connect(
    mapStateToProps,
    {putPotluck, getPotluckById})(EditPotluckForm)