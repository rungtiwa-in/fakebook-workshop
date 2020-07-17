import React from 'react';
import { Avatar, Button, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
        return <div>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <input size="large"
                value={this.state.messageTb}
                onChange={(e) => {
                    this.setState({ messageTb: e.target.value })
                }} ></input>
            {/* <Button type="primary" onClick={this.addComment}>Add</Button> */}
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
                },
                {
                    id: 2,
                    name: 'Noon2',
                    message: 'message1234asdf',
                },
                {
                    id: 3,
                    name: 'Noon3',
                    message: 'message1234qweqwrwer',
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
        return (
            <div>
                <Card>
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                    />
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    <p>Content</p>
                    <CommentInput addCommentItem={this.addCommentItem}></CommentInput>
                    <div>
                        {
                            this.state.commentItems.map((comment) => {
                                return <div key={comment.id}>
                                    <span>{comment.name} | Message : {comment.message}</span>
                                </div>
                            })
                        }
                    </div>
                </Card>


            </div>
        );
    }
}

export default Post;
