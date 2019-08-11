import React from 'react';
import '../../../styles/frndPop.css';
import { PaidBy } from './paidBy';
import { PaidTo } from './paidTo';
import { connect } from "react-redux";
import { instance } from '../../../utils/AxiosConfig';
import { store } from '../../../redux/store';
import { userActionCreator } from '../../../redux/actionCreator/userAction';
 class SettleUp extends React.Component{
    constructor(props){
    super(props);
    this.val = 0;
    this.props.user.friends.push(this.props.user.username);
    this.state = {paidBy:false,paidTo:false,byValue: "you",toValue:"select"}
    }
     PaidBy() {
        this.setState({paidBy: !this.state.paidBy,paidTo:false});
    }

    PaidTo() {
        this.setState({paidBy:false,paidTo: !this.state.paidTo});
    }
    byValue(event){
       
     if(event == this.props.user.username) event = "you"
    //  else {
    //     event = event.slice(0,6); 
    //     event = event+"..."
    //  }
       
        this.setState({...this.state,byValue: event});
    }
    toValue(event){
     if(event == this.props.user.username) event = "you";
    
         this.setState({...this.state,toValue: event});
     }
     Save(){
         if(this.state.toValue == "select"){
             alert("please select the reciver");
             return;
         }
         else if(this.val == ""){
            alert("you must enter an amount");
            return;
         }
         else if(this.state.toValue != "you" && this.state.byValue != "you"){
            alert("you cannot add an Expense that does not involve yourself");
         }
         else if(this.state.toValue == this.state.byValue){
            alert("you can't add money to yourself");
           }
       else{ 
           var sender;
            if(this.state.toValue == "you"){
                this.val = "-" + this.val;
                sender =  this.state.byValue;
            }else sender = this.state.toValue;

            console.log(parseInt(this.val),this.state.byValue,this.state.toValue);
          instance.post("/settle",{username: this.props.user.username,user: sender,val: parseInt(this.val)}).then((resp)=>{
              console.log(resp.data.doc);
              var action = userActionCreator(resp.data.doc,'AddUser');
              store.dispatch(action);
              
              this.props.friend();
          });
       } 
    }
  render(){
        return (
        <div className = "friendPopup">
        <div className = "flx">
        <div className = "frnd-content">
        <div className = "frnd-header">   
        <span>Settle up</span>
        <button className = "float-right" onClick = {this.props.friend}><i class="fas fa-times"></i></button>
        </div>

        <div className = "frnd-set">
        <button onClick = {this.PaidBy.bind(this)}>{(this.state.byValue == "you")?"you":this.state.byValue.slice(0,6) + "..."}</button> paid <button onClick = {this.PaidTo.bind(this)}>{(this.state.toValue == "you" || this.state.toValue == "select")?this.state.toValue:this.state.toValue.slice(0,6) + "..."}</button>
        </div>
      
      <input className = "money" onChange = {(event)=>{
          this.val = event.target.value;
      }} placeholder = "$ 0.0" type="number" name="" id=""/>
      <div className = "pop-btn bt-mr">

        <button className = "btn Add" onClick = {this.Save.bind(this)}>Save</button>

        <button className = "btn cut" onClick = {this.props.friend}>Close</button>
    </div>
        </div>
        
        {this.state.paidBy && <PaidBy list = {this.props.user.friends} byValue = {this.byValue.bind(this)}/>}
        {this.state.paidTo && <PaidTo list = {this.props.user.friends}  toValue = {this.toValue.bind(this)}/>}

        </div>

    </div>
    )}
}
const mapStateToProps = state => {
    console.log("state is  ", state);
    return {
      user: state.user
    };
  };
  
  const fn = connect(mapStateToProps);
  export default fn(SettleUp);