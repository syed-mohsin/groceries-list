import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import configureStore from '../store/store';
import ListContainer from '../containers/ListContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const App = (props) => (
  <Provider store={configureStore(props)}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
