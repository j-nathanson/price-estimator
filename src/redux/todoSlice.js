import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        ADD_TODO: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            { todoList: state.todoList.concat(action.payload) }
        },
    },
})

// Action creators are generated for each case reducer function
export const { ADD_TODO } = todoSlice.actions

export default todoSlice.reducer