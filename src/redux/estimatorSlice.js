import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    costs: {
        costPerGuest: 14
    }
}

export const estimatorSlice = createSlice({
    name: 'estimator',
    initialState,
    reducers: {
        add: state =>{
           
        }
       
    },
})

// Action creators are generated for each case reducer function
 export const { ADD_TODO, TOGGLE_COMPLETE, CLEAR_TASKS, DELETE_TASKS, DELETE_SINGLE_TASK } = estimatorSlice.actions

export default estimatorSlice.reducer