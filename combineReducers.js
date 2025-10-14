import { createStore } from "redux";
import { combineReducers } from "redux";

//create individual reducers:
const cakeInitialState={
    numOfCakes:10
}
const iceCreamInitialState={
    numOfIceCreams:10
}
function cakeReducer(state=cakeInitialState,action){
  switch(action.type){
    case "BUY_CAKE":
        return {numOfCakes:state.numOfCakes-1}
    default:
        return state
  }
}

function iceCreamReducer(state=iceCreamInitialState,action){
   switch(action.type){
    case "BUY_ICECREAM":
        return {numOfIceCreams:state.numOfIceCreams-1}
    default:
        return state
   }
}

//combine reducers:
const rootReducer=combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer

})

//creating store:
const store=createStore(rootReducer)

//accessing store:
store.subscribe(()=>{console.log(store.getState())});

//dispatching:
store.dispatch({type:"BUY_CAKE"})
store.dispatch({type:"BUY_ICECREAM"})

