import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import lists from '../reducers/listsReducer';

const reducers = combineReducers({ lists });

const configureStore = (railsProps) => {
  // remove classes prop passed into App from withStyles in (App.jsx)
  const { classes, ...preloadedState } = railsProps;

  return createStore(reducers, preloadedState, applyMiddleware(thunk));
};

export default configureStore;
