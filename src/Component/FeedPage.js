import React from 'react';
import Post from './Post';
import CreatePost from './CreatePost';

class FeedPage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <CreatePost />
                <Post />
            </div>
        );
    }
}

export default FeedPage;
