// Simple example of a React "smart" component

import { connect } from 'react-redux';
import List from '../components/List';
import * as actions from '../actions/ListActionCreators';

const mapStateToProps = (state) => {
  console.log('state', state);
  return ({ lists: state.lists });
};

export default connect(mapStateToProps, actions)(List);
