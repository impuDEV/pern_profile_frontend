import React, {FC, useEffect} from 'react';
import {Layout, Row} from "antd";
import LoginForm from "../components/LoginForm";
import {useTypedSelector} from "../hooks/redux";
import {ViewportNames} from "../store/reducers/config";
import {sectionSlice} from "../store/reducers/section";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";

const Login: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {viewport} = useTypedSelector(state => state.configReducer)

    // useEffect(() => {
    //     dispatch(sectionSlice.actions.setCurrent(undefined))
    // }, [])

    return (
        <Layout>
            <Row justify="center"
                 align="middle"
                 className={viewport !== ViewportNames.LARGE ? "h100small" : "h100large"}
            >
                <LoginForm/>
            </Row>
        </Layout>
    );
};

export default Login;