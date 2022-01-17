import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    guestNum:50,
    costs: {
        costPerGuest: 14
    }
}

export const estimatorSlice = createSlice({
    name: 'estimator',
    initialState,
    reducers: {
        changeGuestNum: (state, action) =>{
            state.guestNum = action.payload
        }
       
    },
})

// Action creators are generated for each case reducer function
 export const { changeGuestNum } = estimatorSlice.actions

export default estimatorSlice.reducer