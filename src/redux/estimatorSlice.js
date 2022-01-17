import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    guestNum: 50,
    isSideChecked: false,
    costs: {
        costPerGuest: 14,
        sideCost: 100
    }
}

export const estimatorSlice = createSlice({
    name: 'estimator',
    initialState,
    reducers: {
        changeGuestNum: (state, action) => {
            state.guestNum = action.payload
        },
        toggleSides: state => {
            state.isSideChecked = !state.isSideChecked
        }

    },
})

// Action creators are generated for each case reducer function
export const { changeGuestNum, toggleSides } = estimatorSlice.actions

export default estimatorSlice.reducer