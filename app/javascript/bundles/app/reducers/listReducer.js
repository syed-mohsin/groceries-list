const initialState = {
  listData: {},
  items: [],
  editItemId: null,
  message: '',
}

const listReducer = types => (state = initialState, action) => {
  switch (action.type) {
    case types.START_ITEM_EDIT: {
      const { editItemId } = action;
      return { ...state, editItemId };
    }

    case types.CLEAR_ITEM_EDIT: {
      return { ...state, editItemId: null };
    }

    case types.CLEAR_ITEMS: {
      return initialState;
    }

    case types.LOAD_ITEMS_ASYNC_REQUEST: {
      const message = 'New request sent';
      return { ...state, message };
    }

    case types.LOAD_ITEMS_ASYNC_SUCCESS: {
      const message = 'success';
      const { items, listData } = action;
      return { ...state, items, listData, message };
    }

    case types.LOAD_ITEMS_ASYNC_FAILURE: {
      const message = 'There was an error trying to load items';
      return { ...state, message };
    }

    case types.NEW_ITEM_ASYNC_REQUEST: {
      const message = 'New request sent';
      return { ...state, message };
    }

    case types.NEW_ITEM_ASYNC_SUCCESS: {
      const message = 'success';
      const { newItem } = action;
      const items = [...state.items, newItem];
      return { ...state, items, message };
    }

    case types.NEW_ITEM_ASYNC_FAILURE: {
      const message = 'There was an error trying to create new item';
      return { ...state, message };
    }

    case types.EDIT_ITEM_ASYNC_REQUEST:
    case types.TOGGLE_ITEM_COMPLETE_ASYNC_REQUEST:
    case types.TOGGLE_ITEM_IN_MAIN_LIST_ASYNC_REQUEST: {
      const message = 'Edit request sent';
      return { ...state, message };
    }

    case types.EDIT_ITEM_ASYNC_SUCCESS:
    case types.TOGGLE_ITEM_COMPLETE_ASYNC_SUCCESS:
    case types.TOGGLE_ITEM_IN_MAIN_LIST_ASYNC_SUCCESS: {
      const message = 'success';
      const { editedItem } = action;
      const items = state.items.map(item => item.id === editedItem.id ? editedItem : item);
      return { ...state, items, message };
    }

    case types.EDIT_ITEM_ASYNC_FAILURE:
    case types.TOGGLE_ITEM_COMPLETE_ASYNC_FAILURE:
    case types.TOGGLE_ITEM_IN_MAIN_LIST_ASYNC_FAILURE: {
      const message = 'There was an error trying to edit item';
      return { ...state, message };
    }

    case types.DELETE_ITEM_ASYNC_REQUEST: {
      const message = 'Delete request sent';
      return { ...state, message };
    }

    case types.DELETE_ITEM_ASYNC_SUCCESS: {
      const message = 'success';
      const { deletedItem } = action;
      const items = state.items.filter(item => item.id !== deletedItem.id);
      return { ...state, items, message };
    }

    case types.DELETED_ITEM_ASYNC_FAILURE: {
      const message = 'There was an error trying to delete item';
      return { ...state, message };
    }

    default:
      return state;
  }
};

export default listReducer;
