import React from "react";
export  const PaidTo = (props)=>{
 return(
     <div className = "secondBox">
          <div className = "frnd-header">   
        <span>Paid To</span>
        </div>
        <ul className = "myList">
        {props.list.map((value)=>{
               return  <li onClick = {(event)=>{
                    props.toValue(event.target.id);
                  
                }} id = {value}><img className = "pro-img"src={require("../../../images/person-profile.png")} alt="" srcset=""/>{value}</li>
    
            })}
        </ul>
     </div>
 )   
}