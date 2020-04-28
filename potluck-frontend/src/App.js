import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import * as yup from 'yup'
import styled from "styled-components";

import RegisterForm from './RegisterForm'
import Login from "./Login";
import PrivateRoute from './utils/PrivateRoute'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'
        
const url = 'https://potluck-server.herokuapp.com/api/register'

// shape of the form
const initialFormValues = {
    // texts input as a string
    username : '',
    password : '',
    location: '',
    // firstName : '',
    // lastName: '',
    // dateOfBirth: '',
    // address: '',
    // street: '',
    // city: '',
    // state: '',
    // zipCode: '',
//     role:{
//       organizer: false,
//       participant: false,
//     }
}

//shape of the validation errors
const initialFormErrors = {
  username : '',
  password : '',
  location: '',
  // firstName : '',
  // lastName: '',
  // dateOfBirth: '',
  // address: '',
  // street: '',
  // city: '',
  // state: '',
  // zipCode: '',
  // role: '',

}

//setting validation with error message
const formErrorCheck = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must have at least 5 characters in length!')
    .required('Username is required'),  
  password: yup
    .string()
    .min(5, 'password must have at least 5 characters in length!')
    .required('password is required'),
  location: yup
  .string()
  .min(5, 'location must have at least 5 characters in length!')
  .required('location is required'),
  // firstName: yup
  //   .string()
  //   .min(5, 'firstName must have at least 5 characters in length!')
  //   .required('firstName is required'),
  // lastName: yup
  //   .string()
  //   .min(5, 'lastName must have at least 5 characters in length!')
  //   .required('lastName is required'),
  // dateOfBirth: yup
  //   .string()
  //   .min(5, 'dateOfBirth must have at least 5 characters in length!')
  //   .required('dateOfBirth is required'),
  // gender: yup
  //   .string()
  //   .matches(/(male|female)/, 'either male or female')
  //   .required('gender is required'),
  // street: yup
  //   .string()
  //   .min(5, 'street must have at least 5 characters in length!')
  //   .required('street is required'),
  // city: yup
  //   .string()
  //   .min(5, 'city must have at least 5 characters in length!')
  //   .required('city is required'),
  // state: yup
  //   .string()
  //   .min(5, 'Username must have at least 5 characters in length!')
  //   .required('Username is required'),
  // zipCode: yup
  //   .string()
  //   .min(5, 'zipCode must have at least 5 characters in length!')
  //   .required('zipCode is required'),
  // role: yup
  //   .string()
  //   .matches(/(organizer|participant)/, 'either organizer or participant')
  //   .required('role is required'),


})



function App () {
    const [register, setRegister] = useState([])
    // console.log(register, '!!!!????!!!!???!!!???!')

    const[formValues, setFormValues] = useState(initialFormValues)

    const [formDisabled, setFormDisabled] = useState(true)//to track submit button disabled 

    const [formErrors, setFormErrors] = useState(initialFormErrors)// to track validation errors


    //fetching user form from API and setting them in state
    const gerRegister = () => {
        axios.get(url)
        .then(success => {
        setRegister([...register, success.data])
        console.log(success, 'are we getting data?????????')
        // debugger
        })
        .catch(error => {
        // console.log(error, 'do we have errors??????')
        })
    }
    //getting user from API
    useEffect(() => {
        gerRegister()
    }, [])

    //creating a function to post new log in to the Array and setting updated list of register in state

    const postRegister = (log) =>{
        axios.post(url, log)
        .then(success => {
            setRegister([...register, success.data]) 
          // debugger
          console.log(success, 'are we getting data?????????')
        })
        .catch(error => {
         
          // console.log(error, 'Is it Error??????')
        })
    }

      //setup to run validation if the form value changes and allowing enable and disable the submit button
      useEffect(() => {
        formErrorCheck.isValid(formValues)
        .then(valid => {
          console.log(valid)
          setFormDisabled(!valid)
        })
      }, [formValues])

      const onSubmit = evt => {
        evt.preventDefault()
    
        const newRegister = {
          username: formValues.username,
          password: formValues.password,
          location: formValues.location,
          // firstName: formValues.firstName,
          // lastName: formValues.lastName,
          // dateOfBirth: formValues.dateOfBirth,
          // address: formValues.address,
          // street: formValues.street,
          // city: formValues.city,
          // state: formValues.state,
          // zipCode: formValues.zipCode,
          // role: formValues.role,
          // state: formValues.state,
        }
          //this post new user to API
        //  setUsers([...users, newRegister]) 
        postRegister(newRegister)
        setFormValues(initialFormValues)
      }

      const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
    //this updates the form errors
        yup
          .reach(formErrorCheck, name)
          .validate(value)
          .then(valid => {
            setFormErrors({
              ...formErrors,
              [name]: '',
            });
          })
          .catch(error => {
            setFormErrors({
              ...formErrors,
              [name]: error.errors[0]
            });
          });
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };

      const onCheckboxChange = evt => {
        const {name} = evt.target.name
        const isChecked = evt.target.checked

        setFormValues({
          ...formValues,
          role: {
            ...formValues.role,
            [name]: isChecked,
          }
        })
      }

    return (
        <RegisterForm values={formValues}
        onInputChange={onInputChange}
        // onCheckboxChange = {onCheckboxChange}
        onSubmit={onSubmit}
        disabled={formDisabled}
        errors={formErrors} />
      <Router>
      <div className="App">
        <Switch>
          {console.log('app is loading')}
        <Route path="/signup">
          <RegisterForm values={formValues}
            onInputChange={onInputChange}
            // onCheckboxChange = {onCheckboxChange}
            onSubmit={onSubmit}
            disabled={formDisabled}
            errors={formErrors} />
          </Route>
          <Route exact path="/" component={Login}></Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>

    )

}


export default App 