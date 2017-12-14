import * as utils from '../utils/utils.js';

const selectItemToEdit = types => editItemId => ({
  type: types.START_ITEM_EDIT,
  editItemId,
});

const clearSelectedItemToEdit = types => () => ({
  type: types.CLEAR_ITEM_EDIT,
});

const clearItems = types => () => ({
  type: types.CLEAR_ITEMS,
})

const loadItems = types => (url, id, query) => dispatch => {
  dispatch({ type: types.LOAD_ITEMS_ASYNC_REQUEST });

  return fetch(`${url}${id ? id : ''}${utils.buildQuery(query)}`, {
    method: 'GET',
  })
  .then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  })
  .then(data => {
    let listData = {}, items = [];

    if (Array.isArray(data)) {
      items = data;
    } else {
      listData = data;
      items = listData.items;
    }

    dispatch({ type: types.LOAD_ITEMS_ASYNC_SUCCESS, items, listData })
  })
  .catch(() => {
    dispatch({ type: types.LOAD_ITEMS_ASYNC_FAILURE });
  });
}

const handleNewSubmit = types => (url, body) => dispatch => {
  dispatch({ type: types.NEW_ITEM_ASYNC_REQUEST });

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  .then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  })
  .then(newItem => {
    dispatch({ type: types.NEW_ITEM_ASYNC_SUCCESS, newItem })
  })
  .catch(() => {
    dispatch({ type: types.NEW_ITEM_ASYNC_FAILURE });
  });
};

const handleEditSubmit = types => (url, id, body) => dispatch => {
  dispatch({ type: types.EDIT_ITEM_ASYNC_REQUEST });

  return fetch(`${url}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  .then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  })
  .then(editedItem => {
    dispatch({ type: types.EDIT_ITEM_ASYNC_SUCCESS, editedItem })
  })
  .catch(() => {
    dispatch({ type: types.EDIT_ITEM_ASYNC_FAILURE });
  });
};

const handleDelete = types => (url, id) => dispatch => {
  dispatch({ type: types.DELETE_ITEM_ASYNC_REQUEST });

  return fetch(`${url}${id}`, {
    method: 'DELETE',
  })
  .then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  })
  .then(deletedItem => {
    dispatch({ type: types.DELETE_ITEM_ASYNC_SUCCESS, deletedItem })
  })
  .catch(() => {
    dispatch({ type: types.DELETED_ITEM_ASYNC_FAILURE });
  });
}

const generateActions = types => ({
  selectItemToEdit: selectItemToEdit(types),
  clearSelectedItemToEdit: clearSelectedItemToEdit(types),
  clearItems: clearItems(types),
  loadItems: loadItems(types),
  handleNewSubmit: handleNewSubmit(types),
  handleEditSubmit: handleEditSubmit(types),
  handleDelete: handleDelete(types),
});

export default generateActions;
