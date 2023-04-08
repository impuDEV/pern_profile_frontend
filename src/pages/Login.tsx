import React, {FC} from 'react';
import {Layout, Row} from "antd";
import LoginForm from "../components/LoginForm";
import {useTypedSelector} from "../hooks/redux";
import {ViewportNames} from "../store/reducers/config";

const Login: FC = () => {
    const {viewport} = useTypedSelector(state => state.configReducer)
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