import { connect } from 'react-redux';
import Input from '../components/Input';

import generateActions from '../actions/actions';
import generateTypes from '../constants/listActionConstants';

const actions = generateActions(generateTypes('groceries'));

const mapDispatchToProps = dispatch => ({
  handleSubmit: (name) => {
    const url = '/api/v1/lists/';
    return dispatch(actions.handleNewSubmit(url, { list: { name } }));
  },
});

export default connect(null, mapDispatchToProps)(Input);
