import axios, {AxiosResponse} from "axios";
import {IAuth} from "../models/IAuth";
import {$authHost, $host} from "./index";

export default class AuthService {
    static async login(password: string): Promise<AxiosResponse<IAuth>> {
        console.log("fe-password: ", password)
        const response = await $host.post<IAuth>('/login', {password})
        return response
    }

    static async check(): Promise<AxiosResponse<IAuth>> {
        const response = await $authHost.get('/login' )
        return response
    }
}



