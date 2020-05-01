
import React, { useEffect } from 'react'
import {connect} from 'react-redux'

import PotluckCard from './PotluckCard'
import {getPotluck, addPotluck} from '../store/actions/dashActions'
import {getItems} from '../store/actions/itemActions'
import { useHistory } from 'react-router-dom'

const Dashboard = (props)=>{
    //axios get all items for putlucks. Prakash working on
    //axios get all users. save to store. Micheal working on
    const {push}= useHistory()
    useEffect(()=>{
        props.getPotluck()
        props.getItems()
    },[])
    // useEffect(() => {
    //     const getItems = () => {
    //       axios
    //         .get('https://potluck-server.herokuapp.com/api/foods ')
    //         .then(response => {
    //           setItems(response.data);
    //         })
    //         .catch(error => {
    //           console.error('Server Error', error);
    //         });
    //     }
    //     getItems();
    //   }, []);
    
    return(
    <div>
        <section>
            {props.potlucks.map (item=>(
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
        potlucks:state.dashboard.potlucks
    };
  };

export default connect(
    mapStateToProps,
    {getPotluck, addPotluck, getItems})(Dashboard)