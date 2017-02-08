import React, {Component} from 'react';
import './Button.css';

export default class Button extends Component {
    render() {
        const { children, onClickHandler, className } = this.props;
        const resultClassName = `button ${className}`;

        return <button type="button" className={resultClassName} onClick={onClickHandler}>
            {children}
        </button>
    }
    static propTypes = {
        onClick: React.PropTypes.func,
    }
}