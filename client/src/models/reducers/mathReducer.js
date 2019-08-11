export const mathReducer = (initState = {user:undefined},action)=>{
    
    if(action.type == '+'){
      console.log("hello iam action",action.payload);
        return {user: action.payload.user};
    }
    return initState;
}