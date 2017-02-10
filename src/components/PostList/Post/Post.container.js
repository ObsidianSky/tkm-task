import { connect } from 'react-redux';
import CommentList from './Post';
import { deletePost, toggleComments } from './Post.actions'

const mapStateToProps = (state, ownProps) => ({
    commentsIsVisible: state.visibleCommentForPosts.includes(ownProps.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deletePost: () => dispatch(deletePost(ownProps.id)),
    toggleComments: () => dispatch(toggleComments(ownProps.id))
});



export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
