import React, {FC, useState} from 'react';
import {useTypedSelector} from "../hooks/redux";
import {Button, Card, Form, Input} from "antd";
import {rules} from "../utils/rules";
import { useLocation } from 'react-router-dom';
import {RouteNames} from "../router";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";
import {authSlice} from "../store/reducers/auth";
import {AuthActionCreators} from "../store/reducers/auth/ActionCreators";

const LoginForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.authReducer)
    const [password, setPassword] = useState('')
    const dispatch = useDispatch<AppDispatch>()


    const submit = () => {
        dispatch(AuthActionCreators.login(password))
    }

    return (
        <Card title="Login">
            <Form onFinish={submit}
            >
                {error && <span style={{color:'red'}}>{error}</span>}
                <Form.Item label="Password"
                           name="password"
                           rules={[rules.required('Input password please!')]}
                >
                    <Input.Password
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item style={{float:'right'}}>
                    <Button type="primary"
                            htmlType="submit"
                            loading={isLoading}
                    >
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default LoginForm;