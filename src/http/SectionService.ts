import {AxiosResponse} from "axios";
import {ISection} from "../models/ISection";
import {$host} from "./index";

export default class SectionService {
    static async getSections(): Promise<AxiosResponse<ISection[]>> {
        return await $host.get<ISection[]>('')
    }
}
