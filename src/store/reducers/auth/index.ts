import {AuthState} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: AuthState = {
    isAuth: false,
    isLoading: true,
    error: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>){
            state.isAuth = action.payload
        },
        setError(state, action: PayloadAction<string>){
            state.error = action.payload
        },
        checkingPassword(state){
            state.isLoading = true
        },
        checkingPasswordSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = ''
            state.isAuth = true
            localStorage.setItem('token', action.payload)
        },
        checkingPasswordError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
            state.isAuth = false
            localStorage.removeItem('token')
        }
    }
})

export default authSlice.reducer