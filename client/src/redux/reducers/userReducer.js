export const userReducer = (initState = {user: {friends:[]}},action)=>{
   
    if(action.type == 'AddUser'){
        console.log("reducer...........................",action.payload);
        return {user: action.payload};
    }

    return initState;
}