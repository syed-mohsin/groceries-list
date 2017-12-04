import PropTypes from 'prop-types';
import React from 'react';

import MuiList, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';

import { withStyles } from 'material-ui/styles';

import List from './List';

const styles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
  },
});

const IndexList = ({ classes, lists }) => (
    <div className={classes.root}>
      <MuiList subheader={<ListSubheader>Your Lists</ListSubheader>}>
        { lists.map(list => (<List key={list.id} list={list} />))}
      </MuiList>
    </div>
);

IndexList.propTypes = {
  lists: PropTypes.array.isRequired,
};

export default withStyles(styles)(IndexList);
