import React from "react";
import ShowComment from "./ShowComment";
import AddComment from "./AddComment";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Row,
  Col,
  Input,
  Menu,
  Dropdown,
} from "antd";
import { UserOutlined, DownOutlined, MoreOutlined } from "@ant-design/icons";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../Data/Profile.json";

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Meta } = Card;
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/">แก้ไขโพสต์</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/">ลบโพสต์</Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Card className="post-content mb-20">
          <Row>
            <Col span={22}>
              <Meta
                avatar={<Avatar size={48} icon={<UserOutlined />} />}
                title={data.profilename}
                description="1 ชั่วโมงที่แล้ว"
              />
            </Col>
            <Col span={2}>
              {this.props.isMyPost && (
                <Dropdown overlay={menu}>
                  <a
                    className="ant-dropdown-link right"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MoreOutlined rotate={90} />
                  </a>
                </Dropdown>
              )}
            </Col>
          </Row>
          <div>
            <div className="mb-10">
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </div>
            {this.props.isMyFriend && (
              <div className="center">
                <FontAwesomeIcon icon={faCommentAlt} className="mr-10" />
                <span>ความคิดเห็น</span>
              </div>
            )}
          </div>
          <Divider />
          {this.props.isMyFriend && <AddComment />}
          <ShowComment />
        </Card>
      </div>
    );
  }
}

export default Post;
