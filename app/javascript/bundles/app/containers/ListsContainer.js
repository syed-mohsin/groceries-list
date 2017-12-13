// Simple example of a React "smart" component

import { connect } from 'react-redux';
import List from '../components/List';
import * as actions from '../actions/actions';

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
});

const mapDispatchToProps = dispatch => ({
  ...actions
})

export default connect(mapStateToProps, actions)(List);
