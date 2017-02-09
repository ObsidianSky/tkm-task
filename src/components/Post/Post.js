import React, {Component} from 'react';
import Button from '../Button/Button';
import ToggleCommentsButton from '../../containers/ToggleCommentsButton';
import DeletePostButton from '../../containers/DeletePostButton';
import PostComments from '../../containers/PostComments/index';
import './Post.css';

export default class Post extends Component {
    render() {
        const { id, title, body, commentsIsVisible} = this.props;
        return <div className="post">
                <h2 className="post__heading">{title}</h2>
                <p className="post__body">{body}</p>
                <div className="post-buttons-container">
                    <div className="post-buttons-container__left">
                        <Button className="button--blue post-button">Edit</Button>
                        <DeletePostButton id={id} className="button--pink post-button">Delete</DeletePostButton>
                    </div>
                    <div className="post-buttons-container__right">
                        <ToggleCommentsButton id={id} className="button--green button--wide post-button">{commentsIsVisible ? 'Hide comments' : 'Show comments'}</ToggleCommentsButton>
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