import React from 'react'
import styled from "styled-components";









const ItemContainer = (props) => {
    useEffect(()=>{
        props.getItem()
    },[])
    return(
    <div>
        rendering
        {props.potluck.map(item=>{<PotluckCard potlucks={item}/>})}
    </div>
    )
}
export default ItemContainer