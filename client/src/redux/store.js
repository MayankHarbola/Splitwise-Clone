import {createStore} from 'redux';
import {userReducer} from './reducers/userReducer';

export const store = createStore(userReducer);

store.subscribe(()=>{
    console.log("subscribe .....",store.getState());
})