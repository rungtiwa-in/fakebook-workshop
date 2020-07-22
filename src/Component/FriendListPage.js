import React from "react";
import HeaderPage from "./Header";
import HeaderProfile from "./HeaderProfile";
import ListLink from "./ListLink";
import data from "../Data/Profile.json";
import { Divider, Layout, Tabs } from "antd";
import ShowFriendList from "./ShowFriendList";

class FriendListPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Content } = Layout;
    const layout = { labelCol: { span: 8 }, wrapperCol: { span: 14 } };
    const tailLayout = { wrapperCol: { offset: 8, span: 16 } };
    const { TabPane } = Tabs;
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
              <HeaderProfile
                profilename={data.profilename}
                isMyProfile={true}
              />
              <Divider />
              <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Friend List" key="1">
                  <ShowFriendList friendList={data.friendProfile} />
                </TabPane>
                <TabPane tab="Friend Request" key="2">
                  <ShowFriendList friendList={data.friendRequest} />
                </TabPane>
              </Tabs>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default FriendListPage;
