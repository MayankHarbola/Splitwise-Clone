import React from "react";
export  const PaidBy = (props)=>{
 return(
     <div className = "secondBox">
          <div className = "frnd-header">   
        <span>Paid By</span>
        </div>
        {console.log(props.list)}
        <ul className = "myList">

            {props.list.map((value)=>{
               return  <li onClick = {(event)=>{
                    props.byValue(event.target.id);
                  
                }} id = {value}><img className = "pro-img"src={require("../../../images/person-profile.png")} alt="" srcset=""/>{value}</li>
    
            })}
           
        </ul>
     </div>
 )   
}