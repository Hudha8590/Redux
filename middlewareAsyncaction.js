//Fetches a list of users from an API end point nad stores it in the redux store:

//state:
//Typically for data fetching we go with 3 properties for the state object:
// 1.loading :which indicates whether the data is currently being fetched or not
//   display a loading spinner in your componenet
// 2.data:list of users.
// 3.error:Display error to the user.
// eg:store={
//     loading:true,
//     data:[],
//     error:""
// }


//Actions for fetching:
// Fetch_users_request-fetch list of users
// Fetch_users_success-fetched successfully
// Fetch_users_failure-error fetching the data

//Reducers for fetching:
// case Fetch_users_request
//  loading :true
// case Fetch_users_success
//  loading:false
//  users:data(from API)
// case Fetch_users_failure
//  loading:false
//  error:error(from API)
import { createStore,applyMiddleware } from "redux"
import pkg from 'redux-logger'
import { thunk } from "redux-thunk"
import axios from "axios"

const {createLogger}=pkg;
const logger=createLogger()
const initialState={
    loading:false,
    users:[],
    error:''
}

const Fetch_users_request='Fetch_users_request'
const Fetch_users_success='Fetch_users_success'
const Fetch_users_failure='Fetch_users_failure'

const fetchUserRequest=()=>{
    return{
        type:"Fetch_users_request",
        loading:true
    }
}

const fetchUserSuccess=(users)=>{
    return {
        type:"Fetch_users_success",
        payload:users
    }
}

const fetchUserFailure=(error)=>{
    return{
        type:"Fetch_users_failure",
        payload:error
    }
}

const reducer=(state=initialState,action)=>{
   switch(action.type){
    case Fetch_users_request:
        return {
            ...state,
            loading:true
        }
    case Fetch_users_success:
        return {
            loading:false,
            users:action.payload
        }
    case Fetch_users_failure:
        return {
            loading:false,
            users:[],
            error:action.payload
        }
    default:
        return state
   }
}

 //Async Action using Redux Thunk:
 const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            dispatch(fetchUserSuccess(response.data))
        })
        .catch((error)=>{
            dispatch(fetchUserFailure(error.message))
        })
    }
 }

const store=createStore(reducer,applyMiddleware(thunk,logger))
store.dispatch(fetchUsers())

// 1.Dispatch a "loading started" action
// 2.Call the API
// 3.When data comes, dispatch "success"
// 4.If it fails, dispatch "failure"

// Why return a function?
// Because:
// The function gives access to dispatch.
// Inside that function, you can wait for async code (like fetch() or setTimeout).
// Then you can dispatch multiple actions depending on what happens.
// Without thunk, Redux wouldn’t know how to handle this — it would throw an error because reducers expect plain objects.


// The inner function is where you do async tasks and manually control when to dispatch different actions.
// It’s how Redux handles asynchronous logic like API calls.