const state = {
  list: null,
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
      const editMessage = 'Edit request sent';
      return Object.assign({}, state, { editMessage });
    case 'EDIT_ASYNC_SUCCESS':
      const { editedList } = action;
      const list = state.list
      return Object.assign({}, )
    default:
      return state;
  }
};
