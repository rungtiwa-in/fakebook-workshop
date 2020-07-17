import React from 'react';
import { Link } from "react-router-dom";
import {
    Form,
    Input,
    Button,
    Checkbox,
    Row,
    Col
} from 'antd';
import { FacebookFilled } from '@ant-design/icons';

class Login extends React.Component {
    constructor() {
        super()
    }

    render() {
        const layout = { labelCol: { span: 6 }, wrapperCol: { span: 14 }, };
        const tailLayout = { wrapperCol: { offset: 6, span: 16 }, };
        return (
            <div>
                <Row justify="center" align="top" style={{ paddingTop: "100px" }}>
                    <Col span={3}>
                        <div className="logo-l">
                            <FacebookFilled />
                        </div>
                    </Col>
                    <Col span={8}>
                        <Form {...layout} name="login">
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button style={{ marginRight: "10px" }} ><Link to="/signup">Sign Up</Link></Button>
                                <Button type="primary" htmlType="submit"><Link to="/">Submit</Link></Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Login;
