import PropTypes from 'prop-types';
import React from 'react';

import MuiList, { ListSubheader } from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DeleteIcon from 'material-ui-icons/Delete';

import { withStyles } from 'material-ui/styles';

import List from './List';
import NewListInput from '../containers/NewListInput';

const IndexList = (props) => {
    const {
      classes,
      lists,
      editListId,
      selectListToEdit,
      clearSelectedListToEdit,
      handleEditSubmit,
      handleDelete,
    } = props;

    return <div>
      <MuiList subheader={<ListSubheader>Your Lists</ListSubheader>}>
        { lists.map(list => (
          <List
            key={list.id} list={list}
            editClickHandler={selectListToEdit}
            editId={editListId}
            deselectInput={clearSelectedListToEdit}
            handleEditSubmit={handleEditSubmit}
            handleDelete={handleDelete}
          />
        ))}
      </MuiList>
      <NewListInput />
    </div>
};

IndexList.propTypes = {
  lists: PropTypes.array.isRequired,
};

export default IndexList;
