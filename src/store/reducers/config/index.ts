import {ConfigState} from "./types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: ConfigState = {
    viewport: '',
    theme: 'light',
    locale: ''
}

enum ViewportSizes {
    SMALL = 600,
    MEDIUM = 1000,
    LARGE = 1400
}

export enum ViewportNames {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setViewport(state) {
            if(window.innerWidth < ViewportSizes.SMALL)
                state.viewport = ViewportNames.SMALL
            else if (window.innerWidth < ViewportSizes.MEDIUM)
                state.viewport = ViewportNames.MEDIUM
            else
                state.viewport = ViewportNames.LARGE
        }
    }
})

export default configSlice.reducer