import { createStore} from "redux";
 const initialState={
    count:10
 }

 const buyCake=(qty=1)=>{
    return {
        type:"BUY_CAKE",
        payload:qty
    }
 }

const cakeReduce=(state=initialState,action)=>{
    switch(action.type){
      case "BUY_CAKE":
        return {count:state.count-action.payload}
    }
}

const store=createStore(cakeReduce)

store.subscribe(()=>{console.log('numOfCake:',store.getState())})
store.dispatch(buyCake());
store.dispatch(buyCake(2))