import React from 'react'
import { BUY_BOOK } from './constants'

const initialState={
    numOfBooks:20
}
function BookReducer(state=initialState,action) {
  switch(action.type){
    case BUY_BOOK:
        return {numOfBooks:state.numOfBooks-1}
    default:
        return state
  }
    
  
}

export default BookReducer