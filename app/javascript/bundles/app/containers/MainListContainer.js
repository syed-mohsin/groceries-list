import { connect } from 'react-redux';
import List from '../components/List';
import generateActions from '../actions/actions';
import generateTypes from '../constants/listActionConstants';
import generateItemsActions from '../actions/itemsActions';

const actions = generateActions(generateTypes('groceries'));
const itemsActions = generateItemsActions(generateTypes('groceries'));

const mapStateToProps = (state) => ({
  ...state.list,
  url: '/api/v1/items/',
  loadUrl: '/api/v1/items/',
  listSubHeader: 'Main List',
  inputValueKey: 'content',
  query: { is_in_main_list: true },
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
