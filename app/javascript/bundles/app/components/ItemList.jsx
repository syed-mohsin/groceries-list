import PropTypes from 'prop-types';
import React from 'react';

import MuiList, { ListSubheader } from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';

import { withStyles } from 'material-ui/styles';

import Item from './Item';
// import NewItemInput from '../containers/NewItemInput';

const ItemList = (props) => {
    const {
      classes,
      list,
      items,
      editItemId,
      selectItemToEdit,
      clearSelectedItemToEdit,
      handleEditSubmit,
      handleDelete,
    } = props;

    return <div>
      <MuiList subheader={<ListSubheader>{list.name}</ListSubheader>}>
        { items.map(item => (
          <Item
            key={item.id} item={item}
            editClickHandler={selectItemToEdit}
            editId={editItemId}
            deselectInput={clearSelectedItemToEdit}
            handleEditSubmit={handleEditSubmit}
            handleDelete={handleDelete}
          />
        ))}
      </MuiList>
      {/* <NewItemInput /> */}
    </div>
};

export default ItemList;
