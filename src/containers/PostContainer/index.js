import { connect } from 'react-redux';
import CommentList from '../../components/Post/Post';

const mapStateToProps = (state, ownProps) => ({
    commentsIsVisible: state.visibleCommentForPosts.includes(ownProps.id)
});

export default connect(mapStateToProps)(CommentList);
