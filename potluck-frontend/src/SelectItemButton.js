import React, {useEffect, useState} from 'react'
import axios from 'axios'

const dummyUser = [{
    id: 1,
    userName: 'Matt',}
]






function SelectItemButton () {

    const postItem = item => {
        axios.post(dummyUser, item)
        .then (success => {
          setOrders([success.data])
          console.log(success.data, 'got the data....???????')
        debugger
        })
        .catch(error => {
          console.log(error, 'qqqqqqqqqqQQQQQQ???')
        })
      } 
return (

<button onClick={onSubmit}> Select Item</button>

)


}
export default SelectItemButton