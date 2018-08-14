import {connect} from 'react-redux'; // łączenie komponentów do store
import CommentsList from './CommentsList';

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);