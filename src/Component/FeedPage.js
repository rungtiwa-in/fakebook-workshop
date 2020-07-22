import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import HeaderPage from './Header';
import ListLink from "./ListLink";
import 'antd/dist/antd.css';
import { Layout } from 'antd';

class FeedPage extends React.Component {
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
                        <Post isMyPost={true} />
                        <Post isMyPost={false} />
                    </div>
                </Content>
                <ListLink/>
            </Layout>
        );
    }
}

export default FeedPage;
