import React from 'react';
import {instance} from '../utils/AxiosConfig';
import { withRouter } from "react-router-dom";
import {userActionCreator} from "../redux/actionCreator/userAction";
import { store } from "../redux/store";
// import { mathActionCreator } from '../models/actionCreators/mathactioncreator';
// import { store } from '../models/store';

 class AuthComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user: undefined
        }
    }
    componentWillMount (){
        console.log("first")
     const jwt = localStorage.getItem('jwtToken');
     if(!jwt){
         this.props.history.push('/login');
     }
    
     instance.get('/getUser', {headers : {Authorization: `Bearer ${jwt}`}}).then(res => {
         console.log("and here Iam");
        console.log(res) ;
        this.state.user = res.data.userdata.doc;
        localStorage.username = res.data.userdata.doc.username;
         var user = res.data.userdata.doc;
        
         this.setState({user:user});
        
         var action = userActionCreator(user,'AddUser');
         store.dispatch(action);


        //  var action = mathActionCreator(user,'+');
        //  store.dispatch(action);
     }).catch(err =>{
         localStorage.removeItem('jwtToken');
         this.props.history.push('/login');
     });
     
    }

    render(){
        {console.log("hello",this.state.user)}
        if(this.state.user === undefined){
            return(
                <div>
                <h1>loading..........</h1>
            </div>
            
            )
        }

        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(AuthComponent);