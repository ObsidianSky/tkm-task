import React, {Component} from 'react';
import PostContainer from '../../containers/PostContainer/';

export default class PostList extends Component {
    render() {
        const { entities:posts, error} = this.props.posts;
        return <div>
            {error && <span>{error}</span>}

            {posts.map((post) => {
                return <PostContainer
                    key={post.id}
                    {...post}
                />
            })}
        </div>
    }

    static propTypes = {
        posts: React.PropTypes.object,
        visibleCommentForPosts: React.PropTypes.array
    }
}