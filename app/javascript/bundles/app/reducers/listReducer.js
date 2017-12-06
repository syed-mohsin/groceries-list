import {
  START_ITEM_EDIT,
  CLEAR_ITEM_EDIT,
  CLEAR_ITEMS,
  LOAD_ITEMS_ASYNC_REQUEST,
  LOAD_ITEMS_ASYNC_SUCCESS,
  LOAD_ITEMS_ASYNC_FAILURE,
  NEW_ITEM_ASYNC_REQUEST,
  NEW_ITEM_ASYNC_SUCCESS,
  NEW_ITEM_ASYNC_FAILURE,
  EDIT_ITEM_ASYNC_REQUEST,
  EDIT_ITEM_ASYNC_SUCCESS,
  EDIT_ITEM_ASYNC_FAILURE,
  DELETE_ITEM_ASYNC_REQUEST,
  DELETE_ITEM_ASYNC_SUCCESS,
  DELETED_ITEM_ASYNC_FAILURE,
} from '../constants/listConstants';

const initialState = {
  items: [],
  editItemId: null,
  message: '',
}

const itemsReducer = (state = initialState, action) => {
  let items, message;

  switch (action.type) {
    case START_ITEM_EDIT:
      const { editItemId } = action;
      return Object.assign({}, state, { editItemId });

    case CLEAR_ITEM_EDIT:
      return Object.assign({}, state, { editItemId: null });

    case CLEAR_ITEMS:
      return initialState;

    case LOAD_ITEMS_ASYNC_REQUEST:
      message = 'New request sent';
      return Object.assign({}, state, { message });

    case LOAD_ITEMS_ASYNC_SUCCESS:
      items = action.items;
      return Object.assign({}, state, { items });

    case LOAD_ITEMS_ASYNC_FAILURE:
      message = 'There was an error trying to load items';
      return Object.assign({}, state, { message });

    case NEW_ITEM_ASYNC_REQUEST:
      message = 'New request sent';
      return Object.assign({}, state, { message });

    case NEW_ITEM_ASYNC_SUCCESS:
      const { newItem } = action;
      items = [...state.items, newItem];
      return Object.assign({}, state, { items });

    case NEW_ITEM_ASYNC_FAILURE:
      message = 'There was an error trying to create new item';
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
      message = 'There was an error trying to delete item';
      return Object.assign({}, state, { message });

    default:
      return state;
  }
};

export default itemsReducer;
