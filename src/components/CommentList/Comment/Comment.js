import React, {Component} from 'react';

export default class Comment extends Component {
    render() {
        const { email, body} = this.props;
        return <div className="comment">
            <b> {email} </b>: <span>{body}</span>
        </div>
    }

    static propTypes = {
        email: React.PropTypes.string,
        body: React.PropTypes.string,
    }
}