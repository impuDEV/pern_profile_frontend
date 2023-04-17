import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useTypedSelector} from "../hooks/redux";
import {Button, Card, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useActions} from "../hooks/useActions";
import { useNavigate } from 'react-router-dom';
import {RouteNames} from "../router";
import {authSlice} from "../store/reducers/auth";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";

const LoginForm: FC = () => {
    const {error, isLoading, isAuth} = useTypedSelector(state => state.authReducer)
    const [password, setPassword] = useState('')
    const {login} = useActions()
    const navigate = useNavigate()
    // const dispatch = useDispatch<AppDispatch>()

    const submit = async () => {
        login(password)
    }

    // useEffect(() => {
    //     dispatch(authSlice.actions.setError(''))
    // }, [])

    useEffect(() => {
        if (isAuth) {
            navigate(RouteNames.MAIN)
        }
    }, [isAuth])

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