import { createStore,applyMiddleware } from "redux"
import pkg from "redux-logger"
import{ thunk } from "redux-thunk"
import axios from "axios"

const {createLogger}=pkg
const logger=createLogger()

const initialState={
    loading:false,
    users:[],
    error:""
}

//(CONTSNTS)
const FETCH_USERS_REQUEST="FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE="FETCH_USERS_FAILURE"

//Action creators:
const fetchUsersRequest=()=>{
    return {
        type:"FETCH_USERS_REQUEST",
        loading:true
    }
}

const fetchUsersSuccess=(users)=>{
    return {
        type:" FETCH_USERS_SUCCESS",
        payload:users
    }
}
const fetchUsersFailure=(error)=>{
    return {
       type: "FETCH_USERS_FAILURE",
       payload:error
    }
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
       case FETCH_USERS_REQUEST:
         return {
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

    const fetchUser=()=>{
        return (dispatch)=>{
            dispatch(fetchUsersRequest())
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{dispatch(fetchUsersSuccess(response.data))})
            .catch((error)=>{dispatch(fetchUsersFailure(error.message))})
        }
    }

    const store=createStore(reducer,applyMiddleware(thunk,logger));
    store.dispatch(fetchUser())
