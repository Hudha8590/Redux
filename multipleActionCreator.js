import { createStore } from "redux";
const initialState={numOfCake:10}
function buyCake(qty=1){
    return {type:"BUY_CAKE",
    payload:qty}
}
function restokeCake(qty=1){
    return{
        type:"RESTOKE_CAKE",
        payload:qty
    }
}

function cakeReducer(state=initialState,action){
    switch(action.type){
        case "BUY_CAKE":
            return {numOfCake:state.numOfCake-action.payload}
        case "RESTOKE_CAKE":
            return {numOfCake:state.numOfCake+action.payload}
        default: return state
    }
}

const store=createStore(cakeReducer)
store.subscribe(()=>console.log('upadate state:',store.getState()))
store.dispatch(buyCake(2))
store.dispatch(restokeCake(3))
store.dispatch(buyCake())