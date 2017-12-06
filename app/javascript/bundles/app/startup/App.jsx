import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import configureStore from '../store/store';

import NavBar from '../components/NavBar';
import ListsContainer from '../containers/ListsContainer';
import ItemsContainer from '../containers/ItemsContainer';

const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
  },
});

const App = (props) => (
  <Provider store={configureStore(props)}>
    <BrowserRouter>
      <div className="main-app">
        <NavBar />
        <div className={classNames({ [props.classes.root]: true, 'm-2': true })}>
          <Switch>
            <Route exact path="/" component={ListsContainer} />
            <Route exact path="/lists/:id" component={ItemsContainer} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default withStyles(styles)(App);
