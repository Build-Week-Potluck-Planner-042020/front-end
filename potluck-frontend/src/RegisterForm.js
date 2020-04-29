// RegisterForm
import React from 'react'
import styled from "styled-components";
import './App.css';


//styling
const RegistrationForm = styled.form` 
padding: 2rem;

`
const MainForm = styled.div`
margin: 2rem; 
display: flex;
flex-direction: column;
`
const Button = styled.button`
background-color: green;
padding: 1rem;
margin: 0 0 2rem 0;
`



function RegisterForm (props){
    const{
        values,
        onInputChange,
        // onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return(
        <RegistrationForm>
            <h1> Registration Form</h1>
            <div>
                <p>{errors.username}</p>
                <p>{errors.password}</p>
                <p>{errors.location}</p>
                {/* <p>{errors.firstName}</p>
                <p>{errors.lastName}</p>
                <p>{errors.dateOfBirth}</p>
                <p>{errors.gender}</p>
                <p>{errors.address}</p>
                <p>{errors.street}</p>
                <p>{errors.city}</p>
                <p>{errors.state}</p>
                <p>{errors.zipCode}</p>
                <p>{errors.role}</p> */}
            </div>
            <MainForm>
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
                {/* <label> First Name: </label> 
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
                        name='gender'  >
                        <option defaultValue=''>Please choose</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                    */}
                    <label>Location: </label>
                    <input  value = {values.location}
                            onChange = {onInputChange}
                            name = 'location'
                            type = 'text'/>
                {/* <h3>Address: </h3>
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
                            type = 'number'/> */}
                {/* <h3>Role:</h3>
                <label> Organizer</label>
                    <input  checked={values.role.organizer}
                            onChange={onCheckboxChange}
                            name='organizer'
                            type="checkbox" />
                    <label>Participant</label>
                    <input  checked={values.role.participant}
                            onChange={onCheckboxChange}
                            name='participant'
                            type="checkbox" />  */}
            </MainForm>
           <Button>
                <button onClick = {onSubmit} disabled = {disabled}>Register</button>  
           </Button>
        </RegistrationForm>



    )
}
export default RegisterForm