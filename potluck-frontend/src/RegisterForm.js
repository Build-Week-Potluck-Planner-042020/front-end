// RegisterForm
import React from 'react'


function RegisterForm (props){
    const{
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return(
        <form>
            <h1> Registration Form</h1>
            <div>
                <p>{errors.username}</p>
                <p>{errors.password}</p>
                <p>{errors.firstName}</p>
                <p>{errors.lastName}</p>
                <p>{errors.dateOfBirth}</p>
                <p>{errors.address}</p>
                <p>{errors.street}</p>
                <p>{errors.city}</p>
                <p>{errors.state}</p>
                <p>{errors.zipCode}</p>
                <p>{errors.role}</p>
            </div>
            <label>Username:&nbsp;
                <input  value={values.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'/></label>
            <label>Password:&nbsp;
                <input  value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='text'/></label>
            <label> First Name: </label> 
                <input  value = {values.firstName}
                        onChange = {onInputChange}
                        name = 'firstName'
                        type = 'text'/>
            <label> Last Name: </label>
                <input  value = {values.lastName}
                        onChange = {onInputChange}
                        name = 'lastName'
                        type = 'text'/>
             <label> Date of Birth: </label>
                <input  value = {values.dateOfBirth}
                        onChange = {onInputChange}
                        name = 'dateOfBirth'
                        type = 'text'/>
            <label>Gender: </label>
                 <select
                    value={values.gender}
                    onChange={onInputChange}
                    name='civil'  >
                    <option defaultValue=''>Please choose</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            <label>Address: </label>
            <label>Street: </label>
                <input  value = {values.street}
                        onChange = {onInputChange}
                        name = 'street'
                        type = 'text'/>
            <label>City: </label>
                <input  value = {values.city}
                        onChange = {onInputChange}
                        name = 'city'
                        type = 'text'/>
            <label>State: </label>
                <input  value = {values.state}
                        onChange = {onInputChange}
                        name = 'state'
                        type = 'text'/>
            <label>Zip Code: </label>
                <input  value = {values.zipCode}
                        onChange = {onInputChange}
                        name = 'zipCode'
                        type = 'number'/>
            <label>Role:</label>
                <select value={values.role}
                        onChange={onInputChange}
                        name='role' >
                    <option defaultValue=''>Please Select</option>
                    <option value='organizer'>Organizer</option>
                    <option value='participant'>Participant</option>
                </select>
           <button onClick = {onSubmit} disabled = {disabled}>Register</button>  

        </form>



    )
}
export default RegisterForm