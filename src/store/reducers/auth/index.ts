import {AuthState} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: AuthState = {
    password: '',
    isAuth: false,
    isLoading: false,
    error: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPassword(state, action: PayloadAction<string>){
            state.password = action.payload
        },
        setIsAuth(state, action: PayloadAction<boolean>){
            state.isAuth = action.payload
        },
        checkPassword(state){
            state.isLoading = true
        }
    }
})

export default authSlice.reducer