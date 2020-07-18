import React from "react";
import { Row, Col, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

class HeaderProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let name = this.props.profilename;
    let isMyFriend = false;

    if (this.props.friendProfile) {
      name = this.props.friendProfile.name;
      isMyFriend = this.props.friendProfile.isMyFriend;
    }

    return (
      <div className="header-profile">
        <Row>
          <Col span={6}>
            <Avatar size={150} icon={<UserOutlined />} className="right" />
          </Col>
          <Col span={14}>
            <div className="profile-name">{name}</div>
          </Col>
          <Col span={4} style={{ margin: "auto" }}>
            {isMyFriend && <Button disabled>เพิ่มเป็นเพื่อนแล้ว</Button>}
          </Col>
        </Row>
      </div>
    );
  }
}

export default HeaderProfile;
