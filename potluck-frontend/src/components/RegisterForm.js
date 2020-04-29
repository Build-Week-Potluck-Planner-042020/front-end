// RegisterForm
import React, {useEffect, useState} from 'react'
import * as yup from 'yup'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const url = 'https://potluck-server.herokuapp.com/api/register'

// shape of the form
const initialFormValues = {
    // texts input as a string
    username : '',
    password : '',
    // location: '',
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

function RegisterForm (props){
    // const{
    //     values,
    //     onInputChange,
    //     // onCheckboxChange,
    //     onSubmit,
    //     disabled,
    //     errors,
    // } = props

    // const [register, setRegister] = useState([])
    // console.log(register, '!!!!????!!!!???!!!???!')

    const[formValues, setFormValues] = useState(initialFormValues)

    const [formDisabled, setFormDisabled] = useState(true)//to track submit button disabled 

    const [formErrors, setFormErrors] = useState(initialFormErrors)// to track validation errors


    //fetching user form from API and setting them in state
    // const gerRegister = () => {
    //     axios.get(url)
    //     .then(success => {
    //     setRegister([...register, success.data])
    //     console.log(success, 'are we getting data?????????')
    //     // debugger
    //     })
    //     .catch(error => {
    //     // console.log(error, 'do we have errors??????')
    //     })
    // }
    // //getting user from API
    // useEffect(() => {
    //     gerRegister()
    // }, [])

    //creating a function to post new log in to the Array and setting updated list of register in state

    const postRegister = (log) =>{
        axiosWithAuth()
        .post('/register', log)
        .then(success => {
            // setRegister([...register, success.data]) 
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

      const onSubmit = (evt) => {
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
        props.history.push("/");
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

    return(
        <form>
            <h1> Registration Form</h1>
            <div>
                <p>{formErrors.username}</p>
                <p>{formErrors.password}</p>
                {/* <p>{errors.location}</p> */}
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
            <label>Username:&nbsp;
                <input  value={formValues.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'/></label>
            <label>Password:&nbsp;
                <input  value={formValues.password}
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
                {/* <label>Location: </label>
                <input  value = {values.location}
                        onChange = {onInputChange}
                        name = 'location'
                        type = 'text'/> */}
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
           <div>
                <button onClick = {onSubmit} >Register</button>
                {/* <button onClick={()=>{props.history.push('/')}}>router test</button> */}
           </div>
        </form>



    )
}
export default RegisterForm