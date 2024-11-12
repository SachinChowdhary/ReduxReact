export { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos : [{id: 1, text : 'Hello World'}]
}

export const todoSlice = createSlice( {
    name: 'todo',
    initialState,
    reducers :{
        addTodo : (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(newTodo)
        },
        removeTodo : (state, action) => {
            const dummy = state.todos.filter(todo => todo.id !== action.payload)
            state.todos = dummy
        },
        updateTodo : (state, action) => {
            const index = state.todos.filter((todo, ind)=>{
                  if(todo.id ===action.payload)
                    return ind
            })
            state.todos[index].text = action.payload
        }
    }
})
// actions would get all the action performed values
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// Store must have all the list of the reducers part
export default todoSlice.reducer