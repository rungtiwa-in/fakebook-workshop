import React from 'react';
import Post from './Post';
import {
    Card,
    Divider,
    Button,
    Avatar,
    Input
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CreatePost extends React.Component {
    constructor() {
        super()
        this.state = {
            status: "เขียนบางอย่างในนี้"
        }
    }

    render() {
        const { TextArea } = Input;

        return (
            <div>
                <Card title="Create Post" className="mb-20">
                    <div className="create-status">
                        <div>
                            <Avatar size={48} icon={<UserOutlined />} />
                        </div>
                        <div className="status-msg">
                            <TextArea rows={4} value={this.state.status} />
                        </div>
                    </div>
                    <Divider />
                    <Button type="text" shape="round" className="btn-gray">
                        <FontAwesomeIcon icon={faImage} className="mr-10" />
                        Photo/Video
                        </Button>
                </Card>
            </div>
        );
    }
}

export default CreatePost;
