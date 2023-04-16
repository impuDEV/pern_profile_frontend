import {AppDispatch} from "../../index";
import {authSlice} from "./index";
import AuthService from "../../../http/AuthService";
import {AxiosError, AxiosResponse} from "axios";
import {IAuth} from "../../../models/IAuth";

export const AuthActionCreators = {
    login: (password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(authSlice.actions.checkingPassword())
            setTimeout(async () => {
                await AuthService.login(password)
                    .then((response: AxiosResponse<IAuth>) => {
                        localStorage.setItem('token', response.data.token)
                        dispatch(authSlice.actions.checkingPasswordSuccess())
                    })
                    .catch((error) => {
                        if (error instanceof AxiosError){
                            dispatch(authSlice.actions.checkingPasswordError(error.response?.data.message))
                        }
                    })
            }, 1000)

        } catch (err) {
            //TODO
        }
    },

    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('token')
        dispatch(authSlice.actions.setIsAuth(false))
        dispatch(authSlice.actions.setError(''))
    },

    check: () => async (dispatch: AppDispatch) => {
        await AuthService.check()
            .then((response: AxiosResponse<IAuth>) => {
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token)
                    dispatch(authSlice.actions.checkingPasswordSuccess())
                } else {
                    dispatch(authSlice.actions.checkingPasswordError('Not authorized'))
                }
            })
            .catch((error) => {
                localStorage.removeItem('token')
                dispatch(authSlice.actions.checkingPasswordError(''))
            })
    },

}