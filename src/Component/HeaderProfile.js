import React from "react";
import { Row, Col, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { configConsumerProps } from "antd/lib/config-provider";

class HeaderProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let isMyFriend = false;
    let { profilename, isMyProfile, isRequest } = this.props;
    let btnMessage = "";

    if (this.props.friendProfile) {
      profilename = this.props.friendProfile.name;
      isMyFriend = this.props.friendProfile.isMyFriend;
    }

    if (isMyFriend) {
      btnMessage = "เพิ่มเป็นเพื่อนแล้ว";
    } else {
      if (isRequest) {
        btnMessage = "ส่งคำขอเป็นเพื่อนแล้ว";
      } else {
        btnMessage = "เพิ่มเป็นเพื่อน";
      }
    }

    if (isMyProfile) {
      console.log(1, btnMessage);
    } else {
      console.log(2,btnMessage);
    }

    console.log("isMyFriend > ", isMyFriend);
    console.log("isMyProfile > ", isMyProfile);
    console.log("isRequest > ", isRequest);

    return (
      <div className="header-profile">
        <Row>
          <Col span={6}>
            <Avatar size={150} icon={<UserOutlined />} className="right" />
          </Col>
          <Col span={14}>
            <div className="profile-name">{profilename}</div>
          </Col>
          <Col span={4} style={{ margin: "auto" }}>
            {isMyProfile ? "" : <Button>{btnMessage}</Button>}
          </Col>
        </Row>
      </div>
    );
  }
}

export default HeaderProfile;
