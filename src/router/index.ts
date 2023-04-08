import React from "react";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Admin from "../pages/Admin";

export interface IRoute {
    path: string
    element: React.ComponentType
}

export enum RouteNames {
    MAIN = '/',
    LOGIN = '/login',
    SECTION = '/section',
    CATEGORY = '/category',
    ARTICLE = '/article',
    ADMIN = '/admin',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.MAIN, element: Main},
    {path: RouteNames.LOGIN, element: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.ADMIN, element: Admin}
]