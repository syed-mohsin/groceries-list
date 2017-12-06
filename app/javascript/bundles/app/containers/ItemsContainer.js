// Simple example of a React "smart" component

import { connect } from 'react-redux';
import List from '../components/List';
import Item from '../components/Item';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  ...state.list,
  url: '/api/v1/items/',
  listSubHeader: state.list.list.name,
  inputValueKey: 'content',
  setInitialState: (item) => ({
    content: item.content,
    price: item.price,
  }),
  setInputState: content => ({ content }),
  buildBody: body => ({ item: body }),
  primaryLabel: item => item.content,
  secondaryLabel: item => `$${parseFloat(item.price).toFixed(2)}`,
});

const mapDispatchToProps = dispatch => ({
  selectItemToEdit: dispatch(actions.selectItemToEdit),
  clearSelectedItemToEdit: dispatch(actions.clearSelectedItemToEdit),
});

export default connect(mapStateToProps, actions)(List);
