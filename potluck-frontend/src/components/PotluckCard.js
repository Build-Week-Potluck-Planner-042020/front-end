import React, { useEffect, useState} from 'react'
import axios from 'axios'

const PotluckCard = ()=>{
    const [PotluckCard, setPotluckCard] = useState([])

    useEffect(()=>{
        axios.get( 'https://potluck-server.herokuapp.com/api/potlucks'  )
        .then(Res => {
            console.log("1stResponse",Res)
            setPotluckCard(Res) 

       


        })


            .catch(error => console.log('Error!',error))
        },[])





    return(
        <div>pulling</div>
    )
}
export default PotluckCard