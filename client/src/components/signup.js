import React from 'react';
import '../styles/signup.css';
import { withRouter } from "react-router-dom";

import {instance} from '../utils/AxiosConfig';
var obj = {};
 const SignUp = (props)=>{
   return(
   
      <div className = "container signup">
      
      <div className = "signup-logo">
    <img  src={require("../images/logo.png")} alt=""/>
    </div>


    <div className = "signup-form">
      <h3>INTRODUCE YOURSELF</h3>
      <label htmlFor="">Hi there! My name is</label>

      <input id = "username" onChange = {(event)=>{
       obj[event.target.id] = event.target.value;
      }} className = "form-control" type="text" required/>

      <label htmlFor="">Here’s my email address: </label>

      <input id = "email" onChange = {(event)=>{
       obj[event.target.id] = event.target.value;
      }} className = "form-control" type="text" required/>

      <label htmlFor="">And here’s my password:  </label>

      <input id = "password" onChange = {(event)=>{
       obj[event.target.id] = event.target.value;
      }} className = "form-control" type="text" required/>

     <button onClick = {()=>{
       console.log(obj);
       if(obj.password == undefined || obj.email == undefined || obj.username == undefined){
          alert("form is Incomplete");
       }
   else{
       var pr = instance.post('/signup',obj);
       pr.then((response)=>{
          console.log(response.data.Status);
          if(response.data.Status == "S"){
             alert("successful Registerd");
             props.history.push("/Dashboard");
          }else if(response.data.Status == "F"){
             alert("username or Email Id Already exist");
          }
       })}
     }} className = "btn">Sign me up!</button>
     
   </div>



   </div>

   
   )
} 

export default withRouter(SignUp);
