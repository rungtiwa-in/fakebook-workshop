import React from 'react';
import CreatePost from './CreatePost';
import HeaderPage from './Header';
import HeaderProfile from './HeaderProfile';
import Post from './Post'
import { Layout, Divider } from 'antd';
import profile from '../Data/Profile.json'

class FriendProfilePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(profile.friendProfile[1].name)
        const { Content } = Layout;
        return (
            <div>
                <Layout className="layout">
                    <HeaderPage />
                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 380, margin: '16px 0' }}>
                            <HeaderProfile />
                            <Divider />
                            <CreatePost />
                            <Post isMyPost={true} />
                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default FriendProfilePage;
