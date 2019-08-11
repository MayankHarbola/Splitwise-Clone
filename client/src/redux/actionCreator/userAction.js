export const userActionCreator = (user,type)=>{
     return{
        payload: {...user},
        type: type
    };
}