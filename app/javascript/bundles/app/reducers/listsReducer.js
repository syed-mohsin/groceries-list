import {
  START_EDIT,
  CLEAR_EDIT,
  NEW_ASYNC_REQUEST,
  NEW_ASYNC_SUCCESS,
  NEW_ASYNC_FAILURE,
  EDIT_ASYNC_REQUEST,
  EDIT_ASYNC_SUCCESS,
  EDIT_ASYNC_FAILURE,
  DELETE_ASYNC_REQUEST,
  DELETE_ASYNC_SUCCESS,
  DELETED_ASYNC_FAILURE,
} from '../constants/listsConstants';

const state = {
  lists: [],
  editListId: null,
  message: '',
}

const listsReducer = (state = {}, action) => {
  let lists, message;

  switch (action.type) {
    case START_EDIT:
      const { editListId } = action;
      return Object.assign({}, state, { editListId });

    case CLEAR_EDIT:
      return Object.assign({}, state, { editListId: null });

    case NEW_ASYNC_REQUEST:
      message = 'New request sent';
      return Object.assign({}, state, { message });

    case NEW_ASYNC_SUCCESS:
      const { newList } = action;
      lists = [...state.lists, newList];
      return Object.assign({}, state, { lists });

    case NEW_ASYNC_FAILURE:
      message = 'There was an error trying to edit item';
      return Object.assign({}, state, { message });

    case EDIT_ASYNC_REQUEST:
      message = 'Edit request sent';
      return Object.assign({}, state, { message });

    case EDIT_ASYNC_SUCCESS:
      const { editedList } = action;
      lists = state.lists.map(list => list.id === editedList.id ? editedList : list);
      return Object.assign({}, state, { lists });

    case EDIT_ASYNC_FAILURE:
      message = 'There was an error trying to edit item';
      return Object.assign({}, state, { message });

    case DELETE_ASYNC_REQUEST:
      message = 'Delete request sent';
      return Object.assign({}, state, { message });

    case DELETE_ASYNC_SUCCESS:
      const { deletedList } = action;
      lists = state.lists.filter(list => list.id !== deletedList.id);
      return Object.assign({}, state, { lists });

    case DELETED_ASYNC_FAILURE:
      message = 'There was an error trying to edit item';
      return Object.assign({}, state, { message });

    default:
      return state;
  }
};

export default listsReducer;
