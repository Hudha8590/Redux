// import { createStore,applyMiddleware,combineReducers } from "redux";
// import { createLogger } from "redux-logger";
// const logger=createLogger()
// const cakeInitialState={numOfCakes:10}
// const iceCreamInitialState={numOficeCreams:10}
//  const cakeReducer=(state=cakeInitialState,action)=>{
//     switch(action.type){
//         case "BUY_CAKE":
//             return {numOfCakes:state.numOfCakes-1}
//         default:
//             return state
//     }
//  }
//  const icecreamReducer=(state=iceCreamInitialState,action)=>{
//     switch(action.type){
//         case "BUY_ICECREAM":
//             return {numOficeCreams:state.numOficeCreams-1}
//         default:
//             return state
//     }
//  }
//  const rootReducer=combineReducers({
//     cake:cakeReducer,
//     icecream:icecreamReducer
// })

// const store=createStore(rootReducer,applyMiddleware(logger))
// store.subscribe(()=>{console.log(store.getState());})
// store.dispatch({type:"BUY_CAKE"})
// store.dispatch({type:"BUY_ICECREAM"})

//the above code doesn't work as expected because 
// That error happens because redux-logger is a CommonJS module, and you’re using ES Modules (import) in Node.js.
// Named exports like { createLogger } don’t work directly in this case.

// Here’s the correct way to import it in Node.js ES Modules:


import { createStore, applyMiddleware, combineReducers } from "redux";
import pkg from "redux-logger";           // Import CommonJS module
const { createLogger } = pkg;            // Destructure createLogger
const logger = createLogger();           // Initialize logger

// Initial States
const cakeInitialState = { numOfCakes: 10 };
const iceCreamInitialState = { numOfIceCreams: 10 };

// Reducers
const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return { numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return { numOfIceCreams: state.numOfIceCreams - 1 };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});

// Create store with middleware
const store = createStore(rootReducer, applyMiddleware(logger));

// Dispatch actions
store.dispatch({ type: "BUY_CAKE" });
store.dispatch({ type: "BUY_ICECREAM" });
