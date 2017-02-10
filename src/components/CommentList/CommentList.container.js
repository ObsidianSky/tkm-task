import { connect } from 'react-redux';
import CommentList from './CommentList';

const mapStateToProps = (state, ownProps) => ({
    comments: state.comments[ownProps.postId]
});

export default connect(mapStateToProps)(CommentList);
