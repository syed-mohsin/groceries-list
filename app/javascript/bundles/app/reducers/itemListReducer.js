import {
  START_ITEM_EDIT,
  CLEAR_ITEM_EDIT,
  NEW_ITEM_ASYNC_REQUEST,
  NEW_ITEM_ASYNC_SUCCESS,
  NEW_ITEM_ASYNC_FAILURE,
  EDIT_ITEM_ASYNC_REQUEST,
  EDIT_ITEM_ASYNC_SUCCESS,
  EDIT_ITEM_ASYNC_FAILURE,
  DELETE_ITEM_ASYNC_REQUEST,
  DELETE_ITEM_ASYNC_SUCCESS,
  DELETED_ITEM_ASYNC_FAILURE,
} from '../constants/itemListConstants';

const state = {
  item: {},
  items: [],
  editItemId: null,
  message: '',
}

const itemsReducer = (state = {}, action) => {
  let items, message;

  switch (action.type) {
    case START_ITEM_EDIT:
      const { editItemId } = action;
      return Object.assign({}, state, { editItemId });

    case CLEAR_ITEM_EDIT:
      return Object.assign({}, state, { editItemId: null });

    case NEW_ITEM_ASYNC_REQUEST:
      message = 'New request sent';
      return Object.assign({}, state, { message });

    case NEW_ITEM_ASYNC_SUCCESS:
      const { newItem } = action;
      items = [...state.items, newItem];
      return Object.assign({}, state, { items });

    case NEW_ITEM_ASYNC_FAILURE:
      message = 'There was an error trying to edit item';
      return Object.assign({}, state, { message });

    case EDIT_ITEM_ASYNC_REQUEST:
      message = 'Edit request sent';
      return Object.assign({}, state, { message });

    case EDIT_ITEM_ASYNC_SUCCESS:
      const { editedItem } = action;
      items = state.items.map(item => item.id === editedItem.id ? editedItem : item);
      return Object.assign({}, state, { items });

    case EDIT_ITEM_ASYNC_FAILURE:
      message = 'There was an error trying to edit item';
      return Object.assign({}, state, { message });

    case DELETE_ITEM_ASYNC_REQUEST:
      message = 'Delete request sent';
      return Object.assign({}, state, { message });

    case DELETE_ITEM_ASYNC_SUCCESS:
      const { deletedItem } = action;
      items = state.items.filter(item => item.id !== deletedItem.id);
      return Object.assign({}, state, { items });

    case DELETED_ITEM_ASYNC_FAILURE:
      message = 'There was an error trying to edit item';
      return Object.assign({}, state, { message });

    default:
      return state;
  }
};

export default itemsReducer;
