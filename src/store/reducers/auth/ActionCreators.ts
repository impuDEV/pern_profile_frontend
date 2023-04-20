import {AppDispatch} from "../../index";
import {authSlice} from "./index";
import AuthService from "../../../http/AuthService";
import {AxiosResponse} from "axios";
import {IAuth} from "../../../models/IAuth";

export const AuthActionCreators = {
    login: (password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(authSlice.actions.checkingPassword())
            setTimeout(async () => {
                await AuthService.login(password)
                    .then((response:AxiosResponse<IAuth>) => {
                        localStorage.setItem('token', response.data.token)
                        dispatch(authSlice.actions.checkingPasswordSuccess())
                    })
                    .catch((error) => {
                        const {message} = error.response.data
                        dispatch(authSlice.actions.checkingPasswordError(message))
                    })
            }, 1000)

        } catch (e) {
            console.log(e)  //TODO
        }
    },

    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('token')
        dispatch(authSlice.actions.setIsAuth(false))
    },

    check: () => async (dispatch: AppDispatch) => {
        await AuthService.check()
            .then((response: AxiosResponse<IAuth>) => {
                console.log(response.data)
                if(response.data.token){
                    dispatch(authSlice.actions.checkingPasswordSuccess())
                    localStorage.setItem('token', response.data.token)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },

}






