import React, {Component} from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList/PostList';
import { fetchPosts } from '../actions';
import './App.css'

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }
    render() {
        return (
            <div>
                <h1 className="page-title">My awesome blog</h1>
                {/*refactor this shit*/}
                <PostList {...this.props} />
            </ div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App);
