// LogInForm

import React from 'react'

function LogInForm (props){
    const{
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return(
        <form>
            <h1> Please Log In</h1>
            <div>
                <p>{errors.username}</p>
                <p>{errors.password}</p>
            </div>

            <label> Username: </label> 
                <input  value = {values.username}
                        onChange = {onInputChange}
                        name = 'username'
                        type = 'text'/>
            <label> Password: </label>
                <input  value = {values.password}
                        onChange = {onInputChange}
                        name = 'password'
                        type = 'password'/>

           <button onClick = {onSubmit} disabled = {disabled}>Log In</button>  
            
           


        </form>



    )
}
export default LogInForm