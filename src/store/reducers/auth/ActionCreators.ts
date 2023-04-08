import {AppDispatch} from "../../index";
import {authSlice} from "./index";

export const AuthActionCreators = {
    login: (password: string) => async (dispatch: AppDispatch) => {
        dispatch(authSlice.actions.checkPassword)
        setTimeout(async () => {
            // const response = await
        }, 1000)
    },

    logout: () => async (dispatch: AppDispatch) => {}
}