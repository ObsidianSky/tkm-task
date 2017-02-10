import React, {Component} from 'react';
import Button from '../../Button/Button';
import PostComments from '../../CommentList/CommentList.container';
import './Post.css';

export default class Post extends Component {
    render() {
        const { id, title, body, commentsIsVisible, deletePost, toggleComments} = this.props;
        return <div className="post">
                <h2 className="post__heading">{title}</h2>
                <p className="post__body">{body}</p>
                <div className="post-buttons-container">
                    <div className="post-buttons-container__left">
                        <Button className="button--blue post-button">Edit</Button>
                        <Button onClick={deletePost} className="button--pink post-button">Delete</Button>
                    </div>
                    <div className="post-buttons-container__right">
                        <Button onClick={toggleComments} className="button--green button--wide post-button">{commentsIsVisible ? 'Hide comments' : 'Show comments'}</Button>
                    </div>
                </div>
                {commentsIsVisible &&
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