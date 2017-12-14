import { connect } from 'react-redux';
import Input from '../components/Input';

import generateActions from '../actions/actions';
import generateTypes from '../constants/listActionConstants';

const actions = generateActions(generateTypes('recipes'));

const mapDispatchToProps = dispatch => ({
  handleSubmit: (name) => {
    const url = '/api/v1/recipes/';
    return dispatch(actions.handleNewSubmit(url, { recipe: { name } }));
  },
});

export default connect(null, mapDispatchToProps)(Input);
