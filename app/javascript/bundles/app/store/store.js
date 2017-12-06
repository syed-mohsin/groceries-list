import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import items from '../reducers/itemListReducer';

const reducers = combineReducers({ items });

const configureStore = (railsProps) => {
  // remove classes prop passed into App from withStyles in (App.jsx)
  const { classes, ...preloadedState } = railsProps;

  return createStore(reducers, preloadedState, applyMiddleware(thunk));
};

export default configureStore;
