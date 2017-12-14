import React from 'react';

import ItemsContainer from '../../containers/ItemsContainer';
import ItemFormContainer from '../../containers/ItemFormContainer';

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
  },
});

const ListPage = (props) => (
  <div className={props.classes.root}>
    <ItemsContainer {...props} />
    <ItemFormContainer {...props} />
  </div>
)

export default withStyles(styles)(ListPage);
