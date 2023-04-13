import axios, {AxiosResponse} from "axios";
import {IAuth} from "../models/IAuth";
import {$authHost, $host} from "./index";

export default class AuthService {
    static async login(password: string): Promise<AxiosResponse<IAuth>> {
        return await $host.post<IAuth>('/login', {password})
    }

    static async check(): Promise<AxiosResponse> {
        return await $authHost.get('/login', )
    }
}



