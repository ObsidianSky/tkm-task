import React, {Component} from 'react';
import { connect } from 'react-redux';
import PostList from './PostList';
import { fetchPosts } from './PostList.actions';


class GeneralPostList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }
    render() {
        return <PostList { ...this.props } />
    }
}

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps)(GeneralPostList);
