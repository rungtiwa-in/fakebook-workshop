import React from 'react';
import CreatePost from './CreatePost';
import { Link } from "react-router-dom";
import {
    Row, Col, Divider,
    Layout,
    Menu,
    Dropdown,
    Avatar
} from 'antd';
import { FacebookFilled, DownOutlined, UserOutlined } from '@ant-design/icons';

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            profileName: "Rungtiwa Inha"
        }
    }

    render() {
        const { Header, Content } = Layout;
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/">ดูรายชื่อเพื่อน</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/">เปลี่ยนรหัสผ่าน</Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                    <Link to="/login">ออกจากระบบ</Link>
                </Menu.Item>
            </Menu>
        );
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" >
                    <Link to="/"><FacebookFilled /></Link>
                </div>
                <div className="right nav-profile">
                    <span >
                        <Link to="/profile">
                            {this.state.profileName}
                            <Avatar icon={<UserOutlined />} className="ml-10 mr-10" />
                        </Link>
                    </span>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
            </Header>
        );
    }
}

export default Header;
