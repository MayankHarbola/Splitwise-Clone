export const mathActionCreator = (user,opr)=>{
    return{
        payload: {...user},
        type: opr
    };
}