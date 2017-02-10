import React, {Component} from 'react';
import Post from './Post/Post.container';

export default class PostList extends Component {
    render() {
        const { posts } = this.props;
        return <div>

            {posts.map((post) => {
                return <Post
                    key={post.id}
                    {...post}
                />
            })}
        </div>
    }

    static propTypes = {
        posts: React.PropTypes.array
    }
}