import { configureStore } from "@reduxjs/toolkit"; // ✅ Import the function to create a Redux store (modern way)
// ✅ Import the reducer we created in TodoSlice.jsx
// This reducer knows how to handle todo-related actions
import todosReducer from './TodoSlice'


export const store=configureStore({
    reducer:
    // "todos" here is the state key name
    // and todosReducer is the logic that manages that part of the state.
    {  todos:todosReducer}
  
})