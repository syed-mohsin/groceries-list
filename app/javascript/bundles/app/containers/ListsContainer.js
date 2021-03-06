import { connect } from 'react-redux';
import List from '../components/List';
import generateActions from '../actions/actions';
import generateTypes from '../constants/listActionConstants';

const actions = generateActions(generateTypes('groceries'));

const mapStateToProps = state => ({
  ...state.list,
  listSubHeader: 'Your Lists',
  url: '/api/v1/lists/',
  loadUrl: '/api/v1/lists/',
  inputValueKey: 'name',
  setInitialState: list => ({ name: list.name }),
  buildBody: body => ({ list: body }),
  primaryLabel: list => list.name,
  secondaryLabel: list => `${list.items ? list.items.length : 0} items`,
  handleClick: (item, history) => history.push(`/lists/${item.id}`),
  namespace: 'groceries',
});

const mapDispatchToProps = dispatch => ({
  ...actions
})

export default connect(mapStateToProps, actions)(List);
