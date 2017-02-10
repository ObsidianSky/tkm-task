import React, {Component} from 'react';
import GeneralPostList from './PostList/PostList.container';
import LoadingIndicator from './LoadingIndicator/LoadingIndicator.container';
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="page-title">My awesome blog</h1>
                <GeneralPostList />
                <LoadingIndicator />
            </ div>
        );
    }
}

export default App;
