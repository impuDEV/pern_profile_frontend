import React, {FC, useState} from 'react';
import {useTypedSelector} from "../hooks/redux";
import {Button, Card, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useActions} from "../hooks/useActions";

const LoginForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.authReducer)
    const [password, setPassword] = useState('')
    const {login} = useActions()

    const submit = () => {
        login(password)
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