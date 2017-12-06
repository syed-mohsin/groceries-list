import PropTypes from 'prop-types';
import React from 'react';

import MuiList, { ListSubheader } from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';

import { withStyles } from 'material-ui/styles';

// import NewItemInput from '../containers/NewItemInput';

const List = (props) => {
    const {
      classes,
      items,
      editItemId,
      selectItemToEdit,
      clearSelectedItemToEdit,
      handleEditSubmit,
      handleDelete,
      listSubHeader,
      Item,
      NewInput,
      url,
    } = props;

    return <div>
      <MuiList subheader={<ListSubheader>{listSubHeader}</ListSubheader>}>
        { items.map(item => (
          <Item
            key={item.id} item={item}
            editClickHandler={selectItemToEdit}
            editItemId={editItemId}
            deselectInput={clearSelectedItemToEdit}
            handleEditSubmit={handleEditSubmit}
            handleDelete={handleDelete}
            url={url}
          />
        ))}
      </MuiList>
      { NewInput && <NewInput /> }
    </div>
};

export default List;
