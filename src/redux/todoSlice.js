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
        },
        CLEAR_TASKS: (state) => {
            state.todoList = state.todoList.filter(task => task.complete === false)
        },
        DELETE_TASKS: (state) => {
            state.todoList = []
        },
        DELETE_SINGLE_TASK: (state, action) => {
            state.todoList.splice(action.payload, 1);
        }
    },
})

// Action creators are generated for each case reducer function
export const { ADD_TODO, TOGGLE_COMPLETE, CLEAR_TASKS, DELETE_TASKS, DELETE_SINGLE_TASK } = todoSlice.actions

export default todoSlice.reducer