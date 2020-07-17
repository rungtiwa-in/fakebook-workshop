import React from 'react';
import {
    Row,
    Col,
    Avatar,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import data from '../Data/Profile.json'

class HeaderProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header-profile">
                <Row>
                    <Col span={6}>
                        <Avatar size={150} icon={<UserOutlined />} className="right" />
                    </Col>
                    <Col span={18}>
                        <div className="profile-name">
                            {data.profilename}
                        </div>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default HeaderProfile;
