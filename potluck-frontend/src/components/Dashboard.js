import React, { useEffect } from 'react'
import {connect} from 'react-redux'

import PotluckCard from './PotluckCard'
import {getPotluck, addPotluck} from '../store/actions/dashActions'

const Dashboard = (props)=>{
    useEffect(()=>{
        props.getPotluck()
    },[])
    return(
    <div>
        rendering
        {/* {props.potluck.map(item=>{<PotluckCard potlucks={item}/>})} */}
    </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
      state
    };
  };

export default connect(
    mapStateToProps,
    {getPotluck, addPotluck})(Dashboard)