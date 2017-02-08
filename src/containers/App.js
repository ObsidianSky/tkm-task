import React, {Component} from 'react';
import GenericPostList from './GenericPostList/GenericPostList';
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="page-title">My awesome blog</h1>
                <GenericPostList />
            </ div>
        );
    }
}

export default App;
