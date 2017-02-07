import { connect } from 'react-redux';
import { toggleComments } from '../actions';
import Button from '../components/Button/Button'

const mapDispatchToProps = (dispatch, ownProps) => ({
        onClick: () => dispatch(toggleComments(ownProps.id))
    });

export default connect(null, mapDispatchToProps)(Button)