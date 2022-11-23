import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'counter',
    initialState: {
        user: {}
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: state => {
            state.user = {}
        },
        
    }
})



export const { login, logout } = authSlice.actions
export default authSlice.reducer