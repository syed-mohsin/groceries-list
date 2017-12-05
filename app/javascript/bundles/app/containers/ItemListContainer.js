// Simple example of a React "smart" component

import { connect } from 'react-redux';
import ItemList from '../components/ItemList';
import * as actions from '../actions/ItemListActionCreators';

const mapStateToProps = (state) => {
  console.log(state);
  return state.items;
};

const mapDispatchToProps = dispatch => ({
  selectItemToEdit: dispatch(actions.selectItemToEdit),
  clearSelectedItemToEdit: dispatch(actions.clearSelectedItemToEdit),
});

export default connect(mapStateToProps, actions)(ItemList);
