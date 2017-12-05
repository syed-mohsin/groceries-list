import PropTypes from 'prop-types';
import React from 'react';

import MuiList, { ListSubheader } from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';

import { withStyles } from 'material-ui/styles';

import List from './Item';
// import NewItemInput from '../containers/NewItemInput';

const ItemList = (props) => {
    const {
      classes,
      list,
      editItemId,
      selectItemToEdit,
      clearSelectedItemToEdit,
      handleEditSubmit,
      handleDelete,
    } = props;

    const items = list.items ? items : [];

    return <div>
      <MuiList subheader={<ListSubheader>{list.name}</ListSubheader>}>
        { items.map(list => (
          <Item
            key={list.id} item={item}
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
