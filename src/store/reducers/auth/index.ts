import {AuthState} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
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
        checkingPasswordSuccess(state) {
            state.isLoading = false
            state.error = ''
            // state.password = action.payload
            state.isAuth = true
        },
        checkingPasswordError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
            state.isAuth = false
        }
    }
})

export default authSlice.reducer