import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import BookAction from './redux/BookAction'

function BookContainer() {
    const numOfBook=useSelector((state)=>state.numOfBooks)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>Numbers of books:{numOfBook}</h2>
        <button onClick={()=>{dispatch(BookAction())}}>Buy Book</button>
    </div>
  )
}

export default BookContainer