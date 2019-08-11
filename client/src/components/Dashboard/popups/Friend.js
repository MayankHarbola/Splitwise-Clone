import React from "react";
import "../../../styles/frndPop.css";
import { instance } from "../../../utils/AxiosConfig";
import { userActionCreator } from "../../../redux/actionCreator/userAction";
import { store } from "../../../redux/store";
import { connect } from "react-redux";
const Friend = props => {
  var takeInp = { defaultUser: "" };
  return (
    <div className="friendPopup">
      <div className="frnd-content">
        <div className="frnd-header">
          <span>Add a Friend</span>
          <button className="float-right" onClick={props.friend}>
            <i class="fas fa-times" />
          </button>
        </div>

        <input
          id="username"
          onChange={event => {
            takeInp[event.target.id] = event.target.value;
          }}
          placeholder="Type a username"
          className="frnd-name"
          type="text"
        />

        <div className="pop-btn">
          <button
            className="btn Add"
            onClick={() => {
              takeInp.defaultUser = props.user.username;
            
              if(takeInp.username == props.user.username){
                 alert("you can't add yourself as your Friend");
                 return;
              }
              instance
                .post("/AddFriend", takeInp)
                .then(resp => {
                  if (resp.data.doc) {
                    var action = userActionCreator(resp.data.doc, "AddUser");
                    store.dispatch(action);
                  } else {
                    console.log("user not found");
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            }}
          >
            Add Friend
          </button>

          <button className="btn cut" onClick={props.friend}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state is  ", state);
  return {
    user: state.user
  };
};

const fn = connect(mapStateToProps);
export default fn(Friend);
