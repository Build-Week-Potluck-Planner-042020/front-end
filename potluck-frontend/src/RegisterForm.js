// RegisterForm
import React from 'react'
import styled from "styled-components";
import './App.css';

//styling
const RegistrationForm = styled.form`
background-image:'https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Dishes_at_Potluck.jpg';
padding: 2rem;
box-shadow: inset 0 0 10px chocolate;
`
const MainForm = styled.div`
background-color: chocolate;
border: 2px solid chocolate;
border-radius: 2rem;
box-shadow: 0 0 8px 10px chocolate;


margin: 2rem; 
display: flex;
flex-direction: column;
`
const Button = styled.button`
background-color: chocolate;
padding: 1rem;
margin: 1rem;
`
const ErrorMessage = styled.dev`
color: red;
`



function RegisterForm (props){
    const{
        values,
        onInputChange,
        onSubmit,
        // disabled,
        errors,
    } = props

    return(
        <RegistrationForm>
            <h1> Registration Form</h1>
            <ErrorMessage>
                <p>{errors.username}</p>
                <p>{errors.password}</p>
                <p>{errors.location}</p>

            </ErrorMessage>
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

            </MainForm>
           <Button>
                <button onClick = {onSubmit} >Register</button>  
           </Button>
        </RegistrationForm>



    )
}
export default RegisterForm