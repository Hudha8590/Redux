
import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from "./constants"
import axios from 'axios'
 export const fetchUsersRequest=()=>{
    return {
        type :FETCH_USERS_REQUEST,
        
    }
 }

 export const fetchUserSuccess=(users)=>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
 }
 
 export const fetchUserFailure=(error)=>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
 }

 export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>dispatch(fetchUserSuccess(res.data)))
        .catch(error=>dispatch(fetchUserFailure(error.message)))
    }
 }