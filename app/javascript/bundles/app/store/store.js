import { createStore, combineReducers } from 'redux';

import lists from '../reducers/listsReducer';

const reducers = combineReducers({ lists });

const configureStore = (railsProps) => (
  createStore(reducers, railsProps)
);

export default configureStore;
