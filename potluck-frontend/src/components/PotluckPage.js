import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom'

import {getPotluckById} from '../store/actions/dashActions'

const PotluckPage = (props)=>{
    const params= useParams()
    // console.log(params.id)
    // console.log(props)
    useEffect(()=>{
        props.getPotluckById(params.id)
    },[])
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
                <form>

                </form>
                <div>

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
    {getPotluckById})(PotluckPage)