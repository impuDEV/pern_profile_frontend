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
                        dispatch(authSlice.actions.checkingPasswordSuccess(response.data.token))
                    })
                    .catch((error) => {
                        const {message} = error.response.data
                        dispatch(authSlice.actions.checkingPasswordError(message))
                    })
            }, 3000)

        } catch (e) {
            console.log(e)  //TODO
        }
    },

    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('token')
        dispatch(authSlice.actions.setIsAuth(false))
    },

    check: () => async (dispatch: AppDispatch) => {
        dispatch(authSlice.actions.checkingPassword())
        setTimeout(async () => {
            await AuthService.check()
                .then((response: AxiosResponse<IAuth>) => {
                    if(response.data.token){
                        dispatch(authSlice.actions.checkingPasswordSuccess(response.data.token))
                    }
                })
                .catch((error) => {
                    const {message} = error.response.data
                    dispatch(authSlice.actions.checkingPasswordError(''))
                })
        }, 1000)

    },

}






