import React, {useEffect} from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import {Layout, Space, Spin} from "antd";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store";
import {configSlice, ViewportNames} from "./store/reducers/config";
import {useTypedSelector} from "./hooks/redux";
import NavBar from "./components/NavBar";
import FooterCommon from "./components/Footer";
import {useActions} from "./hooks/useActions";
import {authSlice} from "./store/reducers/auth";

function App() {
    const dispatch = useDispatch<AppDispatch>()
    const {viewport} = useTypedSelector(state => state.configReducer)
    const {isAuth, isLoading} = useTypedSelector(state => state.authReducer)
    const {check} = useActions()

    useEffect(() => {
        dispatch(configSlice.actions.setViewport())
        dispatch(authSlice.actions.checkingPassword())
        setTimeout(() => {
            check()
        }, 1000)
    }, [])

    if (isLoading) {
        return (
            <Space size="middle">
                <Spin size="large" />
            </Space>)
    }

    return (
        <Layout>
            {viewport !== ViewportNames.LARGE &&
            <NavBar/>
            }
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
            <FooterCommon/>
        </Layout>
    );

}

export default App;
