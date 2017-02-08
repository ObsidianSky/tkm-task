import React, {Component} from 'react';
import GenericPostList from './GenericPostList/GenericPostList';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <LoadingIndicator />
                <h1 className="page-title">My awesome blog</h1>
                <GenericPostList />
            </ div>
        );
    }
}

export default App;
