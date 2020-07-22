import React from "react";
import HeaderPage from "./Header";
import HeaderProfile from "./HeaderProfile";
import ListLink from "./ListLink";
import Post from "./Post";
import { Layout, Divider } from "antd";
import data from "../Data/Profile.json";

class FriendProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Content } = Layout;
    return (
      <div>
        <Layout className="layout">
          <HeaderPage />
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380, margin: "16px 0" }}
            >
              <HeaderProfile friendProfile={data.friendProfile[0]} />
              <Divider />
              <Post isMyPost={false} isMyFriend={true} />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default FriendProfilePage;
