import React, { useEffect } from 'react'
import {connect} from 'react-redux'

import PotluckCard from './PotluckCard'
import {getPotluck, addPotluck} from '../store/actions/dashActions'
import { useHistory } from 'react-router-dom'

const Dashboard = (props)=>{
    //axios get all items for putlucks. Prakash working on
    //axios get all users. save to store. Micheal working on
    const {push}= useHistory()
    useEffect(()=>{
        props.getPotluck()
    },[])
    console.log(props)
    return(
    <div>
        <section>
            {props.data.map (item=>(
                <PotluckCard item ={item} key={item.id}/>
            ))}
        </section>
        <button onClick={()=>{push('/OrganizerPage')}}>create potluck</button>
    </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
      data:state.dashboard.data
    };
  };

export default connect(
    mapStateToProps,
    {getPotluck, addPotluck})(Dashboard)