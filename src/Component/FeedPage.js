import React from 'react';
import Post from './Post';

class FeedPage extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Post />
            </div>
        );
    }
}

export default FeedPage;
