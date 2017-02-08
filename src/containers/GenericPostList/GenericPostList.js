import React, {Component} from 'react';
import { connect } from 'react-redux';
import PostList from '../../components/PostList/PostList';
import { fetchPosts } from '../../actions';


class GenericPostList extends Component {
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

export default connect(mapStateToProps)(GenericPostList);
