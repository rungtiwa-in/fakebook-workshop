import React from 'react';
import { Link } from "react-router-dom";
import {
    Form,
    Input,
    Button,
    Row,
    Col
} from 'antd';
import { FacebookFilled } from '@ant-design/icons';

class SignupPage extends React.Component {
    constructor() {
        super()
    }

    render() {
        const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 }, };
        const tailLayout = { wrapperCol: { offset: 8, span: 16 }, };
        return (
            <div>
                <Row justify="center" align="top" style={{ paddingTop: "100px" }}>
                    <Col className="gutter-row" span={8}>
                        <Form {...layout} name="signup">
                            <div className="logo-m center">
                                <FacebookFilled />
                            </div>
                            <Form.Item label="Username" name="username" >
                                <Input />
                            </Form.Item>

                            <Form.Item label="Password" name="password" >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item label="Confirm Password" name="confirmpassword" >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item label="Name" name="name" >
                                <Input />
                            </Form.Item>
                            <div className="center">
                                <Button type="primary" htmlType="submit"><Link to="/">Sign Up</Link></Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SignupPage;
