import React from "react";
import "./App.css";
import Login from "./Login";
import PrivateRoute from './utils/PrivateRoute'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {console.log('app is loading')}
          <Route exact path="/" component={Login}></Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
