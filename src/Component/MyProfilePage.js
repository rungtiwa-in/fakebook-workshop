import React from 'react';
import CreatePost from './CreatePost';
import HeaderPage from './Header';
import { Layout } from 'antd';

class MyProfilePage extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { Content } = Layout;
        return (
            <Layout className="layout">
                <HeaderPage />
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380, margin: '16px 0' }}>
                        <CreatePost />
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default MyProfilePage;
