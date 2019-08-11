import React from "react";
import { connect } from "react-redux";

const FriendList = props => {
  return (
    <ul>
      {/* {console.log(props.user.friends[5])} */}

      {props.user.friends.map(value =>  <li className="friendlist">
        <i class="fas fa-user" />
        <span>{value}</span>
      </li>)}
      
    </ul>
  );
};

const mapStateToProps = state => {
  console.log("state is  ", state);
  return {
    user: state.user
  };
};

const fn = connect(mapStateToProps);
export default fn(FriendList);
