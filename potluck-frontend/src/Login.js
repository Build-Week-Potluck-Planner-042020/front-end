import React, { useState } from "react";
import axios from 'axios'
import {useForm} from 'react-hook-form'
import {Container, Card, CardBody, CardHeader, CardText, Col, CardImg, Button, Row, UncontrolledCollapse, } from "reactstrap";

const Login = () => {
  const {register,errors} =useForm();
  const [signUp, setsignUp] = useState({ username: "", password: "" });
 
  
  const submit = e => {
    e.preventDefault()
    console.log(signUp)
    axios
    .post('https://potluck-server.herokuapp.com/api/login',signUp)
    .then(res =>{
        
        setsignUp({
            username:'',
            password:''
        })

    })
    .catch(error =>{
        console.log(error)
    })

  }
  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    //⬆this is the same as event.target.value\event.target.name
    setsignUp({ ...signUp, [name]: value });
  };

  return (
    <section className='Body'>
      <Row className='row' >
      <Card className='Card1' xs='1'>
        <header>
          <CardHeader>
            <CardText>
             <h1 className='H1-Header'>Pot Luck</h1>
            </CardText>
          </CardHeader>
          <h2 className='H2-Header'>Feast Planner</h2>
          <Button className='login-btn-clr' id="toggler" style={{ marginBottom: '1rem' }}>Log In</Button>
        </header>
        
           <UncontrolledCollapse toggler="#toggler">
    


    <div >
      <form onSubmit={submit}>
        <label className ="login-Text" >
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
        <label className ="login-Text">
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
        <input className= 'submit-btn'
        type ='submit' />

        
      </form>
    </div>
    </UncontrolledCollapse>
</Card>
</Row>
    </section>
  );
};

export default Login;
