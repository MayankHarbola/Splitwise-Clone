import React from 'react';
// import {connect} from 'react-redux';
import DashHeader from '../components/DashHeader';
import { AddFriend } from '../components/Dashboard/AddFriends';
import  Middle  from '../components/Dashboard/MiddleDashboard';
import {instance} from '../utils/AxiosConfig';
import {userActionCreator} from "../redux/actionCreator/userAction";
import { store } from "../redux/store"
import  Friend  from '../components/Dashboard/popups/Friend';
import "../styles/Dashboard.css"
import AddExpense from '../components/Dashboard/popups/addExpense';
import SettleUp  from '../components/Dashboard/popups/settleUp';

export class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {showFriend: false,showExp:false,settleUp: false}

    }

    alwaysRun(username){
      console.log("this is username ...........",username);
    //   if(username != undefined){
    //     instance.post('/getData',{username: username}).then((resp)=>{
    //                        console.log("this is response",resp.data.user);
    //                        var action = userActionCreator(resp.data.user,'AddUser');
    //                        store.dispatch(action);
    //                    })
    //   }
    }  
//  componentWillReceiveProps(nextprops){
//      let oldState = this.props.userInfo;
//      console.log("old state length ",oldState.friends.length);
//      console.log("nxt prop lenght ", nextprops.userInfo.friends.length);


//     if(oldState.friends.length != nextprops.userInfo.friends.length){
//         instance.post('/geftData',{username: nextprops.userInfo.username}).then((resp)=>{
//                console.log("this is response",resp.data.user);
//                var action = userActionCreator(resp.data.user,'AddUser');
//                store.dispatch(action);
//            })
//         oldState = nextprops.userInfo;
//     }
//     console.log("old state length ",oldState.friends.length);

//     // console.log("will Mount ",nextprops.userInfo);
//     // instance.post('/getData',{username: nextprops.userInfo.username}).then((resp)=>{
//     //            console.log("this is response",resp.data.user);
//     //            var action = userActionCreator(resp.data.user,'AddUser');
//     //            store.dispatch(action);
//     //        })
//  }   
componentDidMount(){
    console.log("will Mount********************************************** ",localStorage.username);
   instance.post('/getData',{username: localStorage.username}).then((resp)=>{
       console.log("this is response",resp.data.user);
       var action = userActionCreator(resp.data.user,'AddUser');
       store.dispatch(action);
   })
}

showFriend(){
     this.setState({...this.state,showFriend: !this.state.showFriend});
     console.log(this.state.showFriend);
}
showExpense(){
    this.setState({...this.state,showExp: !this.state.showExp});
    console.log(this.state.showExp);
}  

settle(){
    this.setState({...this.state,settleUp: !this.state.settleUp});
    console.log(this.state.settleUp);
}
render(){
    
    return(
    <div >
        {/* {this.alwaysRun(this.props.userInfo.username)} */}
        <DashHeader/>
        
        {this.state.showFriend && <Friend friend = {this.showFriend.bind(this)}/>}
        {this.state.showExp && <AddExpense friend = {this.showExpense.bind(this)}/>}
        {this.state.settleUp && <SettleUp friend = {this.settle.bind(this)}/>}
        
        <div className ="flex">
        <AddFriend  friend = {this.showFriend.bind(this)}/>
        <Middle friend = {this.showExpense.bind(this)} settle = {this.settle.bind(this)}/>
        </div>
    </div>
)
}
}

