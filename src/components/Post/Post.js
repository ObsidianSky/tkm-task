import React, {Component} from 'react';
import Button from '../Button/Button';
import CommentsButton from '../../containers/CommentsButton';
import PostComments from '../../containers/PostComments/PostComments';
import './Post.css';

export default class Post extends Component {
    render() {
        const { id, title, body, commentsVisible} = this.props;
        return <div className="post">
                <h2 className="post__heading">{title}</h2>
                <p className="post__body">{body}</p>
                <div className="post-buttons-container">
                    <div className="post-buttons-container__left">
                        <Button className="button--blue post-button">Edit</Button>
                        <Button className="button--pink post-button">Delete</Button>
                    </div>
                    <div className="post-buttons-container__right">
                        <CommentsButton id={id} className="button--green button--wide post-button">{commentsVisible ? 'Hide comments' : 'Show comments'}</CommentsButton>
                    </div>
                </div>
                {commentsVisible &&
                    <div className="post__comments">
                        <PostComments  postId={id} />
                    </div>
                }

            </div>
    }

    static propTypes = {
        id: React.PropTypes.number,
        title: React.PropTypes.string,
        body: React.PropTypes.string,
        commentsVisible: React.PropTypes.bool
    }
}