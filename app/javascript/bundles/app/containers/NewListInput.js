import { connect } from 'react-redux';
import Input from '../components/Input';
import * as actions from '../actions/ListActionCreators';

const mapDispatchToProps = dispatch => ({
  handleSubmit: (name) => dispatch(actions.handleNewSubmit(name)),
});

export default connect(null, mapDispatchToProps)(Input);
