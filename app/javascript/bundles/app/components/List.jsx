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
    this.state = { name: props.item.name };
  }

  handleEditSubmit = (e) => {
    if (e.key === 'Enter') {
      const url = this.props.url,
            id = this.props.item.id,
            name = this.state.name,
            body = { list: { name }};

      this.props.handleEditSubmit(url, id, body)
      .then(() => this.props.deselectInput())
    }
  }

  handleDelete = () => {
    const url = this.props.url,
          id = this.props.item.id;

    this.props.handleDelete(url, id);
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
    const { item, editItemId, editClickHandler, deselectInput } = this.props;

    return <div>
      { editItemId === item.id ?
        <ListItem>
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

        <ListItem>
          <ListItemText primary={item.name} secondary={`${item.items.length} items`}/>
          <IconButton color="accent" aria-label="edit" onClick={(e) => editClickHandler(item.id)}><ModeEditIcon /></IconButton>
          <IconButton aria-label="Delete" onClick={this.handleDelete}><DeleteIcon /></IconButton>
        </ListItem>
      }

      <Divider />
    </div>
  }
}

export default List;
