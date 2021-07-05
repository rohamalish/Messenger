
import { createStore } from 'redux'
const user=localStorage.getItem("user");

const initialState={
    
        user:user ? JSON.parse(user) : {login:false},
    
    
};console.log(initialState);

const reducer =(state =initialState,action)=>{
    let newState={...state};
    if(action.type==="LOGIN"){
        newState.user=action.playload;
        newState.user.login=true;

    }
    if(action.type==="LOGOUT"){
        newState.user={};
        newState.user.login=false;


    }

    localStorage.setItem("user",JSON.stringify(newState.user))

    return newState;
}
const store =createStore(reducer);
export default store;