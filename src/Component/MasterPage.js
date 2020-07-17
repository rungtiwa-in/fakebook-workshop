import React from 'react';
import FeedPage from './FeedPage';
import 'antd/dist/antd.css';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
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
                    <a target="_blank" href="#">ดูรายชื่อเพื่อน</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" href="#">เปลี่ยนรหัสผ่าน</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item>
                    <a target="_blank" href="#">ออกจากระบบ</a>
                </Menu.Item>
            </Menu>
        );

        return (
            <Layout className="layout">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" >
                        <FacebookFilled />
                    </div>
                    <div className="right">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <span >{this.state.profileName}</span>
                                <Avatar icon={<UserOutlined />} />
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
