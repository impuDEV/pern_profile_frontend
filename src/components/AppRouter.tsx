import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import {useTypedSelector} from "../hooks/redux";
import {privateRoutes, publicRoutes, RouteNames} from "../router";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer)
    return (
        <Routes>
            {isAuth && privateRoutes.map(route =>
                <Route key={route.path}
                       path={route.path}
                       element={<route.element/>}
                />
            )}
            {publicRoutes.map(route =>
                <Route key={route.path}
                       path={route.path}
                       element={<route.element/>}
                />
            )}
            <Route path="*"
                   element={<Navigate to={RouteNames.MAIN} replace/>}
            />
        </Routes>
    );
};

export default AppRouter;