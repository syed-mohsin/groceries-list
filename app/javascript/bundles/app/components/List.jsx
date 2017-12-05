import PropTypes from 'prop-types';
import React from 'react';

import { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

import { withStyles } from 'material-ui/styles';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.list.name };
  }

  handleEditSubmit = (e) => {
    if (e.key === 'Enter') {
      const id = this.props.list.id;
      const name = this.state.name;

      this.props.handleEditSubmit(id, name);
    }
  }

  handleDelete = () => {
    const id = this.props.list.id;
    this.props.handleDelete(id);
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.props.deselectInput();
    }
  }

  autoFocusInput = (ref) => {
    if (ref) {
      this.editListInput = ref;
      ref.focus();
    }
  }

  setInputCursorOffset = (e) => {
    if (this.editListInput) {
      this.editListInput.selectionStart = e.target.value.length;
    }
  }

  render() {
    const { list, editId, editClickHandler, deselectInput } = this.props;

    return <div>
      { editId === list.id ?
        <ListItem dense>
          <TextField
            margin="normal"
            value={this.state.name}
            onChange={this.handleNameChange}
            onKeyPress={this.handleEditSubmit}
            onKeyDown={this.handleKeyDown}
            inputRef={this.autoFocusInput}
            onBlur={deselectInput}
            onFocus={this.setInputCursorOffset}
          />
        </ListItem>

        :

        <ListItem dense>
          <ListItemText primary={list.name} secondary={`${list.items.length} items`}/>
          <IconButton color="accent" aria-label="edit" onClick={(e) => editClickHandler(list.id)}><ModeEditIcon /></IconButton>
          <IconButton aria-label="Delete" onClick={this.handleDelete}><DeleteIcon /></IconButton>
        </ListItem>
      }

      <Divider />
    </div>
  }
}

export default List;
