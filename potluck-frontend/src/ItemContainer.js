import React from 'react'
import styled from "styled-components";


//get request for food items
useEffect(() => {
    const getItems = () => {
      axios
        .get('https://potluck-server.herokuapp.com/api/potlucks/items ')
        .then(response => {
          setItems(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getItems();
  }, []);



    // item mapping over to new food item card
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