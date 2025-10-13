import { createStore } from "redux";
const initialstate={
    count:0
}
const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case "Increment":
            return {count:state.count+1}
        case "Decrement":
            return {count:state.count-1}
        case "reset":
            return {count:0}
          default:
            return state
        }
    }

const store=createStore(reducer)
store.subscribe(()=>{console.log('upadted state:',store.getState())});
store.dispatch({type:"Increment"})
store.dispatch({type:"Decrement"})
store.dispatch({type:"reset"})
