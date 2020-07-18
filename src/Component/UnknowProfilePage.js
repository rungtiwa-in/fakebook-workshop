import React from "react";
import HeaderPage from "./Header";
import HeaderProfile from "./HeaderProfile";
import Post from "./Post";
import { Layout, Divider } from "antd";
import data from "../Data/Profile.json";

class UnknowProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRequest: false,
    };
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
              <HeaderProfile friendProfile={data.friendProfile[1]} isRequest={this.state.isRequest} />
              <Divider />
              <Post isMyPost={false} isMyFriend={false} />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default UnknowProfilePage;
