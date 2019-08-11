import React from 'react';
import { Login } from '../components/login';
import {instance} from '../utils/AxiosConfig';
import { withRouter } from "react-router-dom";
import setAuthorizationToken from "../utils/AxiosConfig";
 class Login_smart extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.input = {};
        this.state = {invalid: false};
    }
    TakeInput(event){
        this.input[event.target.id] = event.target.value;
    }
    Login(){
        // console.log('History is ',this.props.history.push("/Dashboard"));
    var pr = instance.post('/login',this.input);

    pr.then((response)=>{
        console.log(response.data);
        const token = response.data.token;
        localStorage.setItem('jwtToken',token)
        
        if(response.data.Status == 'S'){
            this.props.history.push("/Dashboard");
        }
        else if(response.data.Status == 'F'){
          this.setState({invalid:true});
        }
    })
    }
    render(){
        return(
        <Login sts = {this.state.invalid} input = {this.TakeInput.bind(this)} login = {this.Login.bind(this)}/>
        )
    }
}

export default withRouter(Login_smart);