// Simple example of a React "smart" component

import { connect } from 'react-redux';
import List from '../components/List';
import * as actions from '../actions/actions';
import * as itemsActions from '../actions/itemsActions';

const mapStateToProps = (state) => ({
  ...state.list,
  url: '/api/v1/items/',
  listSubHeader: state.list.listData.name,
  inputValueKey: 'content',
  setInitialState: (item) => ({
    content: item.content,
    price: item.price,
  }),
  buildBody: body => ({ item: body }),
  primaryLabel: item => item.content,
  secondaryLabel: item => `$${parseFloat(item.price).toFixed(2)}`,
  itemStyle: item => item.is_completed ? { textDecoration: 'line-through' } : {},
  showCheckbox: true,
});

export default connect(mapStateToProps, { ...actions, ...itemsActions })(List);
