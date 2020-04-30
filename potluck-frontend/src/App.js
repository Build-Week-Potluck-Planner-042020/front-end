import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import * as yup from 'yup'
import styled from "styled-components";

import Navbar from './components/Navbar'
import Login from "./components/Login";
import RegisterForm from './components/RegisterForm'
import Dashboard from './components/Dashboard'
import OrganizerPage from './components/OrganizerPage'
import PotluckPage from './components/PotluckPage'

import PrivateRoute from './utils/PrivateRoute'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App () {
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/signup" component={RegisterForm}>
            {/* <RegisterForm /*values={formValues}
              onInputChange={onInputChange}
              // onCheckboxChange = {onCheckboxChange}
              onSubmit={onSubmit}
              disabled={formDisabled}
              errors={formErrors} /> */}
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/OrganizerPage">
            <OrganizerPage/>
          </PrivateRoute>
          <PrivateRoute path='/PotluckPage/:id'>
              <PotluckPage/>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
    )
}
export default App 