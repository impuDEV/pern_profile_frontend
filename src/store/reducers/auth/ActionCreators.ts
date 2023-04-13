import {AppDispatch} from "../../index";
import {authSlice} from "./index";
import AuthService from "../../../http/AuthService";
import {AxiosError, AxiosResponse} from "axios";
import {IAuth} from "../../../models/IAuth";

export const AuthActionCreators = {
    login: (password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(authSlice.actions.checkingPassword)
            setTimeout(async () => {
                await AuthService.login(password)
                    .then((response:AxiosResponse<IAuth>) => {
                        localStorage.setItem('token', response.data.token)
                        console.log(response)
                        dispatch(authSlice.actions.checkingPasswordSuccess)
                    })
                    .catch((error) => {
                        console.log(error)
                        if (error instanceof AxiosError){
                            dispatch(authSlice.actions.checkingPasswordError(error.message))
                        }
                    })
            }, 1000)

        } catch (e) {
            console.log(e)
        }
    },

    logout: () => async (dispatch: AppDispatch) => {},

    check: () => async (dispatch: AppDispatch) => {},

}