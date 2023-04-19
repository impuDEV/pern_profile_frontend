import axios, {AxiosResponse} from "axios";
import {ISection} from "../models/ISection";
import {$host} from "./index";

export default class SectionService {
    static async getMain(): Promise<AxiosResponse<ISection>> {
        const response = await $host.get<ISection>('')
        return response
    }
}