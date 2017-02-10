import React, {Component} from 'react';
import Comment from './Comment/Comment';
import './CommentList.css';

export default class CommentList extends Component {
    render() {
        const { comments } = this.props;
        return <div className="comment-list">
            {comments.length === 0 && 'No comments here.'}

            {comments.map((comment) => {
                return (
                    <div className="comment-list__item" key={comment.id}>
                        <Comment
                            {... comment}
                        />
                    </div>
                )
            })}
        </div>
    }

    static propTypes = {
        comments: React.PropTypes.array
    }
}