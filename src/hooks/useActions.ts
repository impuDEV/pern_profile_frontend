import { bindActionCreators } from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";
import {allActionCreators} from "../store/reducers/ActionCreators";

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>()
    return bindActionCreators(allActionCreators, dispatch)
}