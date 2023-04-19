import {SectionState} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: SectionState = {
    index: 0,
    title: '',
    description: ''
}

export const sectionSlice = createSlice({
    name: "section",
    initialState,
    reducers: {
        setIndex(state, action: PayloadAction<number>) {
            state.index = action.payload
        },
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload
        },
        setDescription(state, action: PayloadAction<string>) {
            state.title = action.payload
        },

    }
})

export default sectionSlice.reducer