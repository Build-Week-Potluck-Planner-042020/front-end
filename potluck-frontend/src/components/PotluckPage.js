import React from 'react'
import { useParams } from 'react-router-dom'

const PotluckPage = ()=>{
    const params= useParams()
    console.log(params)
    //filter through all users and all items. either here or in the reducer
    return(
        <div>
            <div>we got here</div>
            <div>{`${params.id}`}</div>
        </div>
    )
}

export default PotluckPage