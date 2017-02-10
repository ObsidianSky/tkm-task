import React, {Component} from 'react';
import './LoadingIndicator.css';
import { connect } from 'react-redux';

class LoadingIndicator extends Component {
    render() {
        const style = {
            display: this.props.visible ? 'block' : 'none'
        };
        return <div className='loader' style={style}></div>
    }
}

const mapStateToProps = (state) => ({
    visible: state.loading
});

export default connect(mapStateToProps)(LoadingIndicator);