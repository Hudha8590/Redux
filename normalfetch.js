import { applyMiddleware, createStore } from "redux";
import pkg from "redux-logger"
import { thunk }  from "redux-thunk";


const {createLogger}=pkg
const logger=createLogger()
const initialState={
    loading:false,
    users:[],
    error:""
}

const FETCH_USERS_REQUEST="FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE="FETCH_USERS_FAILURE"

const fetchUserRequest=()=>{
    return {
        type:"FETCH_USERS_REQUEST",
        loading:true
    }
}

const fetchUserSuccess=(users)=>{
    return{
        type:"FETCH_USERS_SUCCESS",
        payload:users
    }
}

const fetchUserFailure=(error)=>{
    return {
        type:"FETCH_USERS_FAILURE",
        payload:error
    }
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
      case FETCH_USERS_REQUEST:
        return{
            ...state,
            loading:true
        }
      case FETCH_USERS_SUCCESS:
        return {
            loading:false,
            users:action.payload
        }
      case FETCH_USERS_FAILURE:
        return {
            loading:false,
            error:action.payload
        }
    }
}

const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>dispatch(fetchUserSuccess(data)))
        .catch(error=>dispatch(fetchUserFailure(error)))
    }
}

const store=createStore(reducer,applyMiddleware(thunk,logger))
store.dispatch(fetchUsers())