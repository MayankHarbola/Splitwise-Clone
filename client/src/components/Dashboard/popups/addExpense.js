import React from "react";
import "../../../styles/frndPop.css";
import { connect } from "react-redux";
import Chips, { Chip } from "react-chips";
import {instance} from "../../../utils/AxiosConfig";
import { store } from "../../../redux/store";
import { userActionCreator } from "../../../redux/actionCreator/userAction";
class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.input = {};
    this.state = {
      chips: []
    };
  }
  getdate() {
    var today = new Date();

    return (
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2)
    );
  }
  onChange = chips => {
    console.log(chips);
    this.setState({ ...this.state, chips });
  };
  save() {
    // console.log("clicked...", this.state.chips, this.input);
    this.input.amount = Math.round(parseInt(this.input.amount)/(this.state.chips.length + 1));
  
    for(let value of this.state.chips){
      // console.log({username:this.props.user.username,user:value,inp:this.input});
      instance.post('/addExp',{username:this.props.user.username,user:value,inp:this.input}).then((resp)=>{
        console.log("*****************************00",resp.data.doc);
        var action = userActionCreator(resp.data.doc,'AddUser');
       store.dispatch(action);
        this.props.friend();
      })

      
    }
  }
  render() {
    return (
      <div className="friendPopup">
        <div className="frnd-content">
          <div className="frnd-header">
            <span>Add an expense</span>
            <button className="float-right" onClick={this.props.friend}>
              <i class="fas fa-times" />
            </button>
          </div>
          <div className="exp-inp">
            <label htmlFor="">With you and</label>
            {/* <input id = "username"  placeholder = "Enter friend name" className = "exp-name" type="text"/> */}
            <div className="exp-name">
              <Chips
                value={this.state.chips}
                onChange={this.onChange}
                suggestions={this.props.user.friends}
              />
            </div>
          </div>
          <div className="exp-inp2">
            <input
              id="description"
              type="text"
              placeholder="Enter Description"
              onChange={e => {
                this.input[e.target.id] = e.target.value;
              }}
            />
            <input
              id="amount"
              type="number"
              placeholder="Enter Amount"
              onChange={e => {
                this.input[e.target.id] = e.target.value;
              }}
            />
           <br/>
           {/* value={this.getdate()} */}
            <input
              
              id="date"
              type="date"
              onChange={e => {
                this.input[e.target.id] = e.target.value;
              }}
            />
          </div>

          <div className="pop-btn pop-btns">
            <button className="btn Add" onClick={this.save.bind(this)}>
              Save
            </button>

            <button className="btn cut" onClick={this.props.friend}>
              Close
            </button>
          </div>
        </div>
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state is  ", state);
  return {
    user: state.user
  };
};

const fn = connect(mapStateToProps);
export default fn(AddExpense);
