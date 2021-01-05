import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import MyProfile from './components/MyProfile';
import AddEmployee from './components/AddEmployee';
const App = () =>{
  return(
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/dashboard" component={Dashboard} /> 
          <Route exact path="/profile" component={MyProfile} /> 
          <Route exact path="/addEmployee" component={AddEmployee} /> 
        </Switch>
      </main>
    </Router>
  )
}


export default App;