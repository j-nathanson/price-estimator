import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        ADD_TODO: (state, action) => {
            let newTodo = {
                activity: action.payload,
                complete: false
            }
            return { ...state, todoList: state.todoList.concat(newTodo) }
        },
        TOGGLE_COMPLETE: (state, action) => {
            state.todoList[action.payload].complete = !state.todoList[action.payload].complete
        }
    },
})

// Action creators are generated for each case reducer function
export const { ADD_TODO, TOGGLE_COMPLETE } = todoSlice.actions

export default todoSlice.reducer