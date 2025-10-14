import { createStore,applyMiddleware } from "redux";
import pkg from 'redux-logger'
import { thunk } from "redux-thunk";
import axios from "axios";

const {createLogger}=pkg
const logger=createLogger()
const initialValue={
    loading:false,
    posts:[],
    error:""
}

const FETCH_POSTS_REQUEST="FETCH_POSTS_REQUEST"
const FETCH_POSTS_SUCCESS="FETCH_POSTS_SUCCESS"
const FETCH_POSTS_FAILURE="FETCH_POSTS_FAILURE"

const fetchPostRequests=()=>{
    return {
        type:"FETCH_POSTS_REQUEST",
        loading:true
    }
}

const fetchPostSuccess=(posts)=>{
 return {
    type:"FETCH_POSTS_SUCCESS",
    payload:posts
 }
}

const fetchPostFailure=(error)=>{
    return {
        type:"FETCH_POSTS_FAILURE",
        payload:error
    }
}

const reducer=(state=initialValue,action)=>{
   switch(action.type){
      case FETCH_POSTS_REQUEST:
        return {
            ...state,
            loading:true
        }
      case FETCH_POSTS_SUCCESS:
        return{
            loading:false,
            posts:action.payload
        }
      case FETCH_POSTS_FAILURE:
        return {
            loading:false,
            error:action.payload
        }
      default:
        return state
   }
}

const fetchPosts=()=>{
    return (dispatch)=>{
        dispatch(fetchPostRequests())
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{dispatch(fetchPostSuccess(response.data))})
        .catch((error)=>{dispatch(fetchPostFailure(error.message))})
    }
}


const store=createStore(reducer,applyMiddleware(thunk,logger))

store.dispatch(fetchPosts())