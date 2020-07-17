import React from 'react';
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
} from 'antd';
import { UserOutlined, DownOutlined, MoreOutlined } from '@ant-design/icons';
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CommentInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messageTb: props.messageTb,
            isUpdate: false
        }
    }

    addComment = () => {
        this.props.addCommentItem(99, 'TestName', this.state.messageTb)
    }

    render() {
        return <div className="comment-input mb-10">
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
                            this.setState({ messageTb: e.target.value })
                        }}
                    />
                </Col>
                <Col span={3}>
                    <Button type="primary" className="right" onClick={this.addComment}>Add</Button>
                </Col>
            </Row>
        </div>
    }
}

class CommentShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/">แก้ไขคอมเม้น</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/">ลบคอมเม้น</Link>
                </Menu.Item>
            </Menu>
        );

        return <div className="comment-show">
            {
                this.props.commentItems.map((item) =>
                    <div key={item.id} className="mb-10">
                        <Row>
                            <Col span={2}>
                                <Avatar icon={<UserOutlined />} />
                            </Col>
                            <Col span={19} className="flex">
                                <span className="profile-name mr-10">{item.name}</span>
                                <span className="comment">{item.message}</span>
                            </Col>
                            <Col span={3}>
                                {item.isProfile &&
                                    <Dropdown overlay={menu}>
                                        <a className="ant-dropdown-link right" onClick={e => e.preventDefault()}>
                                            <MoreOutlined rotate={90} />
                                        </a>
                                    </Dropdown>
                                }
                            </Col>
                        </Row>
                    </div>)
            }
        </div>
    }
}

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commentItems: [
                {
                    id: 1,
                    name: 'Noon',
                    message: 'message1234',
                    isProfile: false
                },
                {
                    id: 2,
                    name: 'Noon2',
                    message: 'message1234asdf',
                    isProfile: false
                },
                {
                    id: 3,
                    name: 'Noon3',
                    message: 'message1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwer',
                    isProfile: true
                },
                {
                    id: 4,
                    name: 'Noon4',
                    message: 'message1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwermessage1234qweqwrwer',
                    isProfile: false
                },
            ],
            messageTb: ''
        }
    }

    addCommentItem = (id, name, message) => {
        this.state.commentItems.push({
            id,
            name,
            message
        });
        this.setState({
            commentItems: this.state.commentItems
        });
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
                <Card className="post-content mb-10">
                    <Meta
                        avatar={<Avatar size={48} icon={<UserOutlined />} />}
                        title="Rungtiwa Inha"
                        description="1 ชั่วโมงที่แล้ว"
                    />
                    <div className="mb-10">
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    </div>
                    <div className="center">
                        <FontAwesomeIcon icon={faCommentAlt} className="mr-10" /><span>ความคิดเห็น</span>
                    </div>
                    <Divider />
                    <CommentInput addCommentItem={this.addCommentItem}></CommentInput>
                    <CommentShow commentItems={this.state.commentItems}></CommentShow>
                </Card>
                <Card className="post-content mb-20">
                    <Row>
                        <Col span={22}>
                            <Meta
                                avatar={<Avatar size={48} icon={<UserOutlined />} />}
                                title="Rungtiwa Inha"
                                description="1 ชั่วโมงที่แล้ว"
                            />
                        </Col>
                        <Col span={2}>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link right" onClick={e => e.preventDefault()}>
                                    <MoreOutlined rotate={90} />
                                </a>
                            </Dropdown>
                        </Col>
                    </Row>
                    <div>
                        <div className="mb-10">
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        </div>
                        <div className="center">
                            <FontAwesomeIcon icon={faCommentAlt} className="mr-10" /><span>ความคิดเห็น</span>
                        </div>
                    </div>
                    <Divider />
                    <CommentInput addCommentItem={this.addCommentItem}></CommentInput>
                    <CommentShow commentItems={this.state.commentItems}></CommentShow>
                </Card>

            </div>
        );
    }
}

export default Post;
