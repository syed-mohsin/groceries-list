import PropTypes from 'prop-types';
import React from 'react';

import { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

import { withStyles } from 'material-ui/styles';

class Item extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props;
    this.state = props.setInitialState(item);
  }

  clickHandler = () => {
    const { item, history } = this.props;
    this.props.handleClick(item, history);
  }

  handleEditSubmit = e => {
    if (e.key === 'Enter') {
      const url = this.props.url,
            id = this.props.item.id,
            body = this.props.buildBody(this.state);

      this.props.handleEditSubmit(url, id, body)
      .then(() => this.props.clearSelectedItemToEdit());
    }
  }

  handleDelete = () => {
    const url = this.props.url,
          id = this.props.item.id;

    this.props.handleDelete(url, id);
  }

  handleInputChange = e => {
    this.setState({ [this.props.inputValueKey]: e.target.value });
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.clearSelectedItemToEdit();
    }
  }

  autoFocusInput = ref => {
    if (ref) {
      this.editItemInput = ref;
      ref.focus();
    }
  }

  setInputCursorOffset = e => {
    if (this.editItemInput) {
      this.editItemInput.selectionStart = e.target.value.length;
    }
  }

  handleCheck = e => {
    const { item } = this.props;
    this.props.handleCheck(item);
  }

  render() {
    const { item, editItemId, selectItemToEdit, clearSelectedItemToEdit,
            primaryLabel, secondaryLabel, inputValueKey, itemStyle,
            showCheckbox } = this.props;

    return <div>
      { editItemId === item.id ?
        <ListItem>
          <TextField
            margin="normal"
            className="w-100"
            value={this.state[inputValueKey]}
            onChange={this.handleInputChange}
            onKeyPress={this.handleEditSubmit}
            onKeyDown={this.handleKeyDown}
            inputRef={this.autoFocusInput}
            onBlur={clearSelectedItemToEdit}
            onFocus={this.setInputCursorOffset}
          />
        </ListItem>

        :

        <ListItem button style={itemStyle && itemStyle(item)}>
          {
            showCheckbox && <Checkbox
                checked={item.is_in_main_list}
                tabIndex={-1}
                onChange={this.handleCheck}
                disableRipple
                color="accent"
              />
          }

          <ListItemText primary={primaryLabel(item)} secondary={secondaryLabel(item)} onClick={this.clickHandler} />
          <IconButton color="accent" aria-label="edit" onClick={(e) => selectItemToEdit(item.id)}><ModeEditIcon /></IconButton>
          <IconButton aria-label="Delete" onClick={this.handleDelete}><DeleteIcon /></IconButton>
        </ListItem>
      }

      <Divider />
    </div>
  }
}

export default Item;
