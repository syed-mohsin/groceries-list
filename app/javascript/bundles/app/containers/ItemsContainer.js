// Simple example of a React "smart" component

import { connect } from 'react-redux';
import List from '../components/TempList';
import Item from '../components/Item';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  ...state.items,
  url: '/api/v1/items/',
  listSubHeader: state.items.list.name,
  Item,
});

const mapDispatchToProps = dispatch => ({
  selectItemToEdit: dispatch(actions.selectItemToEdit),
  clearSelectedItemToEdit: dispatch(actions.clearSelectedItemToEdit),
});

export default connect(mapStateToProps, actions)(List);
