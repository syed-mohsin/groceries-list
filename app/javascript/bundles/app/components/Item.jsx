import PropTypes from 'prop-types';
import React from 'react';

import { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

import { withStyles } from 'material-ui/styles';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.item.content,
      price: props.item.price,
    };
  }

  handleEditSubmit = (e) => {
    if (e.key === 'Enter') {
      const url = this.props.url,
            id = this.props.item.id,
            content = this.state.content,
            price = this.state.price,
            body = { item: { content, price } };

      this.props.handleEditSubmit(url, id, body)
      .then(() => this.props.deselectInput())
    }
  }

  handleDelete = () => {
    const url = this.props.url,
          id = this.props.item.id;

    this.props.handleDelete(url, id);
  }

  handleInputChange = (e) => {
    this.setState({ content: e.target.value });
  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.props.deselectInput();
    }
  }

  autoFocusInput = (ref) => {
    if (ref) {
      this.editItemInput = ref;
      ref.focus();
    }
  }

  setInputCursorOffset = (e) => {
    if (this.editItemInput) {
      this.editItemInput.selectionStart = e.target.value.length;
    }
  }

  render() {
    const { item, editItemId, editClickHandler, deselectInput } = this.props;
    console.log('props', this.props, item.id === editItemId);

    return <div>
      { editItemId === item.id ?
        <ListItem>
          <TextField
            margin="normal"
            value={this.state.content}
            onChange={this.handleInputChange}
            onKeyPress={this.handleEditSubmit}
            onKeyDown={this.handleKeyDown}
            inputRef={this.autoFocusInput}
            onBlur={deselectInput}
            onFocus={this.setInputCursorOffset}
          />
        </ListItem>

        :

        <ListItem>
          <ListItemText primary={item.content} secondary={`$${parseFloat(item.price).toFixed(2)}`}/>
          <IconButton color="accent" aria-label="edit" onClick={(e) => editClickHandler(item.id)}><ModeEditIcon /></IconButton>
          <IconButton aria-label="Delete" onClick={this.handleDelete}><DeleteIcon /></IconButton>
        </ListItem>
      }

      <Divider />
    </div>
  }
}

export default Item;
