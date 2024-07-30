import { Button, Form, FormProps, Input, notification } from "antd";
import React, { useState } from "react";
import Configuration from "./Configuration";

type FieldType = {
    username?: string;
    password?: string;
};

export const Login: React.FC = () => {
    const [validLogin, setValidLogin] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>();
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.success({
            message: 'Đăng nhập thành công !',
            duration: 2
        });
    };
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        if (values.username === "thuong" && values.password === "123!@#") {
            setValidLogin(true);
            openNotification();
        }else{
            setErrMsg("* Invalid Password !");
        }
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return <>
        {contextHolder}
        {!validLogin && <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                <Button type="primary" htmlType="submit" style={{float:"right"}}>
                    Submit
                </Button>
                {errMsg && <p style={{color:"red", fontSize:"12px", margin:"0"}}>{errMsg}</p>}
            </Form.Item>
        </Form>}
        {validLogin &&<Configuration/>}
    </>
}
export default Login;