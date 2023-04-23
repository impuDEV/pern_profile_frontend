import {AppDispatch} from "../../index";
import SectionService from "../../../http/SectionService";
import {sectionSlice} from "./index";
import {AxiosResponse} from "axios";
import {ISection} from "../../../models/ISection";

export const SectionActionCreators = {
    fetchSections: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(sectionSlice.actions.sectionFetching())

            setTimeout(async () => {
                await SectionService.getSections()
                    .then((response:AxiosResponse<ISection[]>) => {
                        dispatch(sectionSlice.actions.sectionFetchingSuccess(response.data))
                    })
                    .catch((error) => {
                        const {message} = error.response.data
                        dispatch(sectionSlice.actions.sectionFetchingError(message))
                    })
            }, 1000)
        } catch (e) {
            console.log('error') //TODO
        }
    },
    fetchSection: (index: number) => async (dispatch: AppDispatch) => {}

}