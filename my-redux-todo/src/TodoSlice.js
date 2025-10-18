import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:[] // list of todo objects { id, text, completed }
}
const TodoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({
                id:Date.now(),
                text:action.payload,
                completed:false,
            })
        },
        toogleTodo:(state,action)=>{
            const todo=state.todos.find((t)=>t.id===action.payload);
            if(todo)todo.completed=!todo.completed
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((t)=>t.id !==action.payload)
        }
    }
})

export const { addTodo, toggleTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;