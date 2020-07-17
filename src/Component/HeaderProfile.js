import React from 'react';
import {
    Row,
    Col,
    Avatar,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';

class HeaderProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profileName: "Rungtiwa Inha"
        }
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
                            {this.state.profileName}
                        </div>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default HeaderProfile;
