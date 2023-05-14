
import { legacy_createStore } from 'redux'; 

const reducer =(state=0,action)=>{
    switch(action.type) {
        case "DECREMENT":
            return state-1;
         
        case "INCREMENT":
            return state+1;
           
                default:
                    return state;
    }
};
export const stores = legacy_createStore (reducer);
