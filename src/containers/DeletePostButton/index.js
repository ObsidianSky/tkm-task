import { connect } from 'react-redux';
import { deletePost } from './actions';
import Button from '../../components/Button/Button'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClickHandler: () => dispatch(deletePost(ownProps.id))
});

export default connect(null, mapDispatchToProps)(Button)