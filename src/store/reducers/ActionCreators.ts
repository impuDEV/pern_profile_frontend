import {AuthActionCreators} from "./auth/ActionCreators";
import {authSlice} from "./auth";

export const allActionCreators = {
    ...AuthActionCreators,
    ...authSlice.actions,
}