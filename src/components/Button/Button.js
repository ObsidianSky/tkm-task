import React, {Component} from 'react';
import './Button.css';

export default class Button extends Component {
    render() {
        const { children, onClick } = this.props;
        return <button type="button" className="button" onClick={onClick}>
            {children}
        </button>
    }
    // static propTypes = {
    //     onClick: React.PropTypes.function,
    // }
}