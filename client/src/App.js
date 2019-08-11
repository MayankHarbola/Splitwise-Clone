import React from 'react';
import {Switch,Route} from 'react-router-dom';
// import { Login } from './components/login';
import Login_smart from './containers/login_container';
import { Landing } from './components/landing';
import  SignUp  from './components/signup';
import {Dashboard} from './containers/Dashboard';
import  AuthComponent  from './containers/AuthComponent';
export  class App extends React.Component{
  render(){
    return (
      <div>
        <Switch>
          
          <Route exact path = "/" component = {Landing}></Route>
          <Route exact path = "/login" component = {Login_smart}></Route>
          <Route exact path = "/signup" component = {SignUp}></Route>
          <AuthComponent>
          <Route exact path = "/Dashboard" component = {Dashboard}></Route>
          </AuthComponent>
       </Switch>
      </div>
    )
  }
} 