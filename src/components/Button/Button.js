import React, {Component} from 'react';
import './Button.css';

export default class Button extends Component {
    render() {
        const { children, className } = this.props;
        const resultClassName = `button ${className}`;

        return <button {...this.props} type="button" className={resultClassName}>
            {children}
        </button>
    }
    static propTypes = {
        onClick: React.PropTypes.func,
    }
}