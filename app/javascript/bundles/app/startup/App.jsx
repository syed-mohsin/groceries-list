import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import configureStore from '../store/store';

import NavBar from '../components/NavBar';
import HomePage from '../components/pages/HomePage';
import ListPage from '../components/pages/ListPage';

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
        <div className="row m-2">
          <div className={classNames({ [props.classes.root]: true, 'offset-md-3 col-md-6': true })}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/lists/:id" component={ListPage} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default withStyles(styles)(App);
