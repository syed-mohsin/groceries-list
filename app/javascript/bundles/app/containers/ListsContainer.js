// Simple example of a React "smart" component

import { connect } from 'react-redux';
import IndexList from '../components/IndexList';
import * as actions from '../actions/ListActionCreators';

const mapStateToProps = (state) => {
  return state.lists;
};

const mapDispatchToProps = dispatch => ({
  selectListToEdit: dispatch(actions.selectListToEdit),
  clearSelectedListToEdit: dispatch(actions.clearSelectedListToEdit),
});

export default connect(mapStateToProps, actions)(IndexList);
