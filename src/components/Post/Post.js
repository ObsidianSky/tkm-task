import React, {Component} from 'react';
import Button from '../Button/Button';
import CommentsButton from '../../containers/CommentsButton';
import './Post.css';

export default class Post extends Component {
    render() {
        const { id, title, body, comments, commentsVisible } = this.props;
        return <div className="post">
                <h2 className="post__heading">{title}</h2>
                <p className="post__body">{body}</p>
                <div className="post-buttons-container">
                    <div className="post-buttons-container__left">
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </div>
                    <div className="post-buttons-container__right">
                        <CommentsButton id={id}>{commentsVisible ? 'Hide comments' : 'Show comments'}</CommentsButton>
                    </div>
                </div>
                {commentsVisible &&
                    <div className="comments">
                        {comments.map(comment => <div key={comment.id}>{comment.body}</div>)}
                    </div>
                }
            </div>
    }

    static propTypes = {
        title: React.PropTypes.string,
        body: React.PropTypes.string,
    }
}