// Simple example of a React "smart" component

import { connect } from 'react-redux';
import IndexList from '../components/IndexList';
import * as actions from '../actions/ListActionCreators';

const mapStateToProps = (state) => {
  console.log('state', state);
  return state.lists;
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(IndexList);
