import React from 'react';
import FeedPage from './FeedPage';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import {
    Layout,
    Menu,
    Dropdown,
    Avatar
} from 'antd';
import { FacebookFilled, DownOutlined, UserOutlined } from '@ant-design/icons';
import '../Style/App.css';

class Home extends React.Component {
    constructor(props) {
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
            <Layout className="layout">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" >
                        <Link to="/"><FacebookFilled /></Link>
                    </div>
                    <div className="right nav-profile">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <span className="mr-10">{this.state.profileName}</span>
                                <Avatar icon={<UserOutlined />} className="mr-10" />
                                <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380, margin: '16px 0' }}>
                        <FeedPage />
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default Home;
