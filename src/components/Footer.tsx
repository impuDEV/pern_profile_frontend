import React, {FC} from 'react';
import {Layout} from "antd";
import {NavLink, useLocation} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/redux";
import {authSlice} from "../store/reducers/auth";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";
import {AuthActionCreators} from "../store/reducers/auth/ActionCreators";

const {Footer} = Layout

const FooterCommon: FC = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer)
    const dispatch = useDispatch<AppDispatch>()
    const location = useLocation()
    const isLogin = location.pathname === RouteNames.LOGIN

    return (
        <Footer style={{textAlign: 'center'}}>
            impuDEV © 2018
            {!isAuth && !isLogin ?
                <NavLink to={RouteNames.LOGIN}
                         style={{cursor:'auto', color:'black'}}
                >
                   <span> - </span>
                </NavLink>
                :
                <span
                    onClick={() => dispatch(AuthActionCreators.logout())}
                > - </span>
            }
            {new Date().getFullYear()}
        </Footer>
    );
};

export default FooterCommon;