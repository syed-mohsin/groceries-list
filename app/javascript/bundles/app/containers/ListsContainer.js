// Simple example of a React "smart" component

import { connect } from 'react-redux';
import List from '../components/List';
import NewListInput from '../containers/NewListInput';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  ...state.list,
  listSubHeader: 'Your Lists',
  url: '/api/v1/lists/',
  inputValueKey: 'name',
  NewInput: NewListInput,
  setInitialState: list => ({ name: list.name }),
  buildBody: body => ({ list: body }),
  primaryLabel: list => list.name,
  secondaryLabel: list => `${list.items.length} items`,
  setInputState: name => ({ name }),
});

export default connect(mapStateToProps, actions)(List);
