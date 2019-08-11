import React from 'react';
import "../../styles/Dashboard.css";
import FriendList from './FriendList'
export const AddFriend = (props)=>{
    return(
        <div className = "AddFriend">
         
         <div className = "content">
         <div className = "friendHeader" >
            <label htmlFor="">FRIENDS</label>
            <button onClick = {props.friend} className = "AddFrnd float-right">+Add</button>
          
         </div>
         <div className = "Friend_List">
               <FriendList/>
         </div>
         </div>

        </div>
    )
}