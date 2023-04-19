import {AuthActionCreators} from "./auth/ActionCreators";
import {authSlice} from "./auth";
import {SectionActionCreators} from "./section/ActionCreators";
import {sectionSlice} from "./section";

export const allActionCreators = {
    ...AuthActionCreators,
    ...authSlice.actions,
    ...SectionActionCreators,
    ...sectionSlice.actions
}