import {createStore} from 'redux';
import {mathReducer} from './reducers/mathReducer';

export const store = createStore(mathReducer);

store.subscribe(()=>{
    console.log("subscribe .....",store.getState());
})