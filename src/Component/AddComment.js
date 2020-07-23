import React from "react";
import { Avatar, Button, Row, Col, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageTb: props.messageTb,
      isUpdate: false,
    };
  }

  render() {
    return (
      <div className="comment-input mb-10">
        <Row>
          <Col span={2}>
            <Avatar icon={<UserOutlined />} />
          </Col>
          <Col span={19} className="flex">
            <Input
              value={this.state.messageTb}
              placeholder="เขียนความเห็น"
              allowClear
              onChange={(e) => {
                this.setState({ messageTb: e.target.value });
              }}
            />
          </Col>
          <Col span={3}>
            <Button type="primary" className="right">
              Add
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddComment;
