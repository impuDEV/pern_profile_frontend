import {ISection} from "../../../models/ISection";

export interface SectionState {
    sections: ISection[]
    currentIndex: number | undefined
    isLoading: boolean
    error: string
}