// Simple example of a React "smart" component

import { connect } from 'react-redux';
import TempList from '../components/TempList';
import List from '../components/List';
import NewListInput from '../containers/NewListInput';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  ...state.items,
  listSubHeader: 'Your Lists',
  url: '/api/v1/lists/',
  Item: List,
  NewInput: NewListInput,
});

export default connect(mapStateToProps, actions)(TempList);
