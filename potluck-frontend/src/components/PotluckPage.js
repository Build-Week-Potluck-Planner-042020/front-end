import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import {getPotluckById, deletePotluck} from '../store/actions/dashActions'
import EditPotluckForm from './EditPotluckForm'

const PotluckPage = (props)=>{
    const params= useParams()
    const {push}= useHistory()
    const [addItem, setAddItem] = useState()
    useEffect(()=>{
        props.getPotluckById(params.id)
    },[])

    const changeHandler = (e)=>{
        e.preventDefault()
    }
    const submitHandler = (e)=>{
        e.preventDefault()
    }
    const deleteProcess = ()=>{
        props.deletePotluck(params.id)
        push('/dashboard')
    }

    useEffect(()=>{
        props.getPotluckById(params.id)
    },[])
    // useEffect(()=>{
    //     props.getPotluckById(params.id)
    // },[addItem])
    //filter through all users and all items. either here or in the reducer
    return(
        <div>
            <div>we got here</div>
            <div>
                <h3>Potluck Info</h3>
                <h2>{props.details.name}</h2>
                <div>{props.details.host}</div>
                <div>{props.details.location}</div>
                <div>{props.details.date}</div>
                <div>{props.details.time}</div>
            </div>
            <div>
                <h3>attendees</h3>
            </div>
            <div>
                <h3>items at potluck</h3>
            </div>
            <div>
                <h3>potluck controls</h3>
                <h4>edit details</h4>
                <EditPotluckForm />
                <div>
                    <h4>add items</h4>
                    <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        name="items"
                        placeholder="item"
                        value={addItem}
                        onChange={changeHandler}
                    />
                    </form>
                </div>
                <div>
                    <h4>delete potluck</h4>
                    <button onClick={()=>{deleteProcess()}}></button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state)
    return {
      details:state.dashboard.currentPotluck
    };
  };

export default connect(
    mapStateToProps,
    {getPotluckById, deletePotluck})(PotluckPage)