import {SectionState} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISection} from "../../../models/ISection";

const initialState: SectionState = {
    sections: [],
    currentIndex: undefined,
    isLoading: false,
    error: ''
}

export const sectionSlice = createSlice({
    name: "section",
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setCurrent(state, action: PayloadAction<number | undefined>) {
            state.currentIndex = action.payload
        },
        setSections(state, action: PayloadAction<ISection[]>) {
            state.sections = action.payload
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        sectionFetching(state) {
            state.isLoading = true
        },
        sectionFetchingSuccess(state, action: PayloadAction<ISection[]>) {
            state.isLoading = false
            state.error = ''
            state.sections = action.payload
        },
        sectionFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.currentIndex = undefined
            state.error = action.payload
        },

    }
})

export default sectionSlice.reducer