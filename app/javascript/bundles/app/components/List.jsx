import PropTypes from 'prop-types';
import React from 'react';

import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';

import { withStyles } from 'material-ui/styles';

const List = ({ list }) => (
  <ListItem>
    <ListItemText primary={list.name} secondary={`${list.items.length} items`}/>
    <IconButton color="accent" aria-label="edit" onClick={(e) => true}><ModeEditIcon /></IconButton>
    <IconButton aria-label="Delete" onClick={(e) => true}><DeleteIcon /></IconButton>
  </ListItem>
);

export default List;
