import React from 'react';
import { Link } from "react-router-dom";
import {
    Avatar,
    Row,
    Col,
    Menu,
    Dropdown,
} from 'antd';
import { UserOutlined, DownOutlined, MoreOutlined } from '@ant-design/icons';
import data from '../Data/Comments.json'


class ShowComment extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/">แก้ไขคอมเม้น</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/">ลบคอมเม้น</Link>
                </Menu.Item>
            </Menu>
        );

        return <div className="comment-show">
            {
                data.map((item) =>
                    <div key={item.id} className="mb-10">
                        <Row>
                            <Col span={2}>
                                <Avatar icon={<UserOutlined />} />
                            </Col>
                            <Col span={19} className="flex">
                                <span className="profile-name mr-10">{item.name}</span>
                                <span className="comment">{item.message}</span>
                            </Col>
                            <Col span={3}>
                                {item.isProfile &&
                                    <Dropdown overlay={menu}>
                                        <a className="ant-dropdown-link right" onClick={e => e.preventDefault()}>
                                            <MoreOutlined rotate={90} />
                                        </a>
                                    </Dropdown>
                                }
                            </Col>
                        </Row>
                    </div>)
            }
        </div>
    }
}

export default ShowComment;
