import React, {Component} from 'react';
import { connect } from 'react-redux';
import Posts from '../components/Posts';
import { fetchPosts } from '../actions';

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }
    render() {
        const { posts } = this.props;
        return (
            <div>
                <Posts posts={posts}/>
            </ div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(App);
