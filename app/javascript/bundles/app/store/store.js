import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

import listReducerGenerator from '../reducers/listReducer';
import generateTypes from '../constants/listActionConstants';

const list = listReducerGenerator(generateTypes('groceries'));
const recipes = listReducerGenerator(generateTypes('recipes'));

const reducers = combineReducers({ form, list, recipes });

const configureStore = (railsProps) => {
  // remove classes prop passed into App from withStyles in (App.jsx)
  const { classes, ...preloadedState } = railsProps;

  return createStore(reducers, preloadedState, applyMiddleware(thunk));
};

export default configureStore;
