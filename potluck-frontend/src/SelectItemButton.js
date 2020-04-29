import React from 'react'
import styled from "styled-components";

const ItemList = styled.div`
display: flex;
flex-direction: column;
align-content: space-around;
`



function SelectItemButton (props) {
    const{
        onSubmit
    } = props
    
    return (
        <ItemList>
            <button onClick={onSubmit}> Mac and Cheese </button>
            <button onClick={onSubmit}> Cheese pizza </button>
            <button onClick={onSubmit}> Potato Salad </button>
            <button onClick={onSubmit}> Greek Salad </button>
            <button onClick={onSubmit}> Bread </button>
            <button onClick={onSubmit}> Butter </button>
            <button onClick={onSubmit}> Chicken Pasta </button>
            <button onClick={onSubmit}> Grilled Pork Rib </button>
            <button onClick={onSubmit}> Water Bottles </button>
            <button onClick={onSubmit}> Cheese Cake </button>
            <button onClick={onSubmit}> Paper Plates </button>
            <button onClick={onSubmit}> Plastic Utensils </button>
        </ItemList>

    )


}
export default SelectItemButton