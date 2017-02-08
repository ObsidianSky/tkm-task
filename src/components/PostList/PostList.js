import React, {Component} from 'react';
import Post from '../Post/Post';

export default class PostList extends Component {
    render() {
        const { entities:posts, fetching, error} = this.props.posts;
        const { visibleCommentForPosts } =  this.props;
        return <div>
            {fetching && 'Loading...'}
            {(!fetching && error) && <span>{error}</span>}

            {posts.map((post) => {
                return <Post
                    key={post.id}
                    {...post}
                    commentsVisible={visibleCommentForPosts.includes(post.id)}
                />
            })}
        </div>
    }

    static propTypes = {
        posts: React.PropTypes.object,
        visibleCommentForPosts: React.PropTypes.array
    }
}