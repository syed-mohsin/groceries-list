import PropTypes from 'prop-types';
import React from 'react';

import MuiList, { ListSubheader } from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';

import Item from './Item';

class List extends React.Component {
  componentDidMount() {
    if (!this.props.items.length) {
      this.props.loadItems('/api/v1/lists/', this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.clearItems();
  }

  render() {
    const {
      items,
      selectItemToEdit,
      clearSelectedItemToEdit,
      listSubHeader,
      NewInput,
    } = this.props;

    return <div>
      <MuiList subheader={<ListSubheader>{listSubHeader}</ListSubheader>}>
        { items.map(item => (
          <Item
            key={item.id}
            item={item}
            editClickHandler={selectItemToEdit}
            deselectInput={clearSelectedItemToEdit}
            {...this.props}
          />
        ))}
      </MuiList>

      { NewInput && <NewInput /> }
    </div>
  }
}

export default List;
