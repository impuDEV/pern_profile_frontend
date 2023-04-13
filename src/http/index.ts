import axios, {InternalAxiosRequestConfig} from "axios";
import {IAuth} from "../models/IAuth";

const $host = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json"
    }
})

const $authHost = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

// const authInterceptor = (config: InternalAxiosRequestConfig)  => {
//     config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
//     return config
// }
//
// $authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}