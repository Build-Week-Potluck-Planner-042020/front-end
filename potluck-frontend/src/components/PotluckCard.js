import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const PotluckCard = props =>{
    const{push}= useHistory()
    const {item} = props
    // console.log(props)
    return(
        <div>
            <section>
                <Link to={`/PotluckPage/${item.id}`}>
                    <h2>{item.name}</h2>
                    <div>{item.location}</div>
                    <time>{item.date}</time>
                    <div></div>
                    <time>{item.time}</time>
                </Link>
            </section>
        </div>
    )
}
export default PotluckCard