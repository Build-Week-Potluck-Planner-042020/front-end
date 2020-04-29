import React, { useState, useEffect } from "react";
import {useForm} from 'react-hook-form'

import {axiosWithAuth} from '../utils/axiosWithAuth'

const Login = (props) => {
  const {register,errors} =useForm();
  const [signUp, setsignUp] = useState({ username: "", password: "" });
 
  
  const submit = e => {
    e.preventDefault()
    console.log(signUp)
    // useEffect(()=>{
      axiosWithAuth()
      .post('/login', signUp)
      .then(res =>{
          console.log(res)
          localStorage.setItem("token", res.data.token);
          props.history.push("/dashboard");
          setsignUp({
              username:'',
              password:''
          })
      })
    .catch(error =>{
        console.log(error)
    })
    // },[])
  }
  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    //⬆this is the same as event.target.value\event.target.name
    setsignUp({ ...signUp, [name]: value });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            placeholder="username"
            value={signUp.username}
            onChange={handleChange}
            ref={register({required: true, minLength: 6})}
            ></input>
          {errors.username && <p>Name too short</p>}
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            placeholder="password"
            value={signUp.password}
            onChange={handleChange}
            ref={register({required: true, minLength: 6})}
            >
          </input>
          {errors.password && <p>Name too short</p>}
        </label>
        <input
        type ='submit' />
        <button onClick={()=>{props.history.push('/signup')}}>Sign-up</button>
        
      </form>
    </div>
  );
};

export default Login;
