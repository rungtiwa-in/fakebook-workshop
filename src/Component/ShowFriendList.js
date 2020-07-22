import React from "react";
import { Row, Col, Card, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

class ShowFriendList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row gutter={32} justify="center">
          {this.props.friendList.map((item) => (
            <Col className="mb-10">
              <Card style={{ width: "400px" }}>
                <Row>
                  <Col>
                    <Avatar size={70} icon={<UserOutlined />} />
                  </Col>
                  <Col className="ml-10">
                    {item.name}
                    <br />
                    {item.isMyFriend ? (
                      <Button>ลบเพื่อน</Button>
                    ) : (
                      <>
                        <Button>ยอมรับ</Button>
                        <Button>ปฏิเสธ</Button>
                      </>
                    )}
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default ShowFriendList;
