import React, {Component} from 'react';

export default class Posts extends Component {
    render() {
        const { posts } = this.props;

        return <div>
            {posts.map((post) => {
                const { id, title, body} = post;
                return <div key={id}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            })}
        </div>
    }

    static propTypes = {
        posts: React.PropTypes.array
    }
}