const state = {
  lists: [],
  editListId: null,
  editMessage: '',
  deleteMessage: '',
}
const listsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'START_EDIT':
      const { editListId } = action;
      return Object.assign({}, state, { editListId });

    case 'EDIT_ASYNC_REQUEST':
      let editMessage = 'Edit request sent';
      return Object.assign({}, state, { editMessage });

    case 'EDIT_ASYNC_SUCCESS':
      const { editedList } = action;
      let lists = state.lists.map(list => list.id === editedList.id ? editedList : list);
      return Object.assign({}, { lists });

    case 'EDIT_ASYNC_FAILURE':
      editMessage = 'There was an error trying to edit item';
      return Object.assign({}, state, { editMessage });

    case 'DELETE_ASYNC_REQUEST':
      const deleteMessage = 'Delete request sent';
      return Object.assign({}, state, { deleteMessage });

    case 'DELETE_ASYNC_SUCCESS':
      const { deletedList } = action;
      lists = state.lists.filter(list => list.id !== deletedList.id);
      return Object.assign({}, { lists });

    case 'EDIT_ASYNC_FAILURE':
      editMessage = 'There was an error trying to edit item';
      return Object.assign({}, state, { editMessage });

    default:
      return state;
  }
};


export default listsReducer;
