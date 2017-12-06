/* eslint-disable import/prefer-default-export */

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

export const selectItemToEdit = (editItemId) => ({
  type: START_ITEM_EDIT,
  editItemId,
});

export const clearSelectedItemToEdit = () => ({
  type: CLEAR_ITEM_EDIT,
});

export const clearItems = () => ({
  type: CLEAR_ITEMS,
})

export const loadItems = (url, id) => (dispatch) => {
  dispatch({ type: LOAD_ITEMS_ASYNC_REQUEST });

  return fetch(`${url}${id ? id : ''}`, {
    method: 'GET',
  })
  .then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  })
  .then(items => {
    dispatch({ type: LOAD_ITEMS_ASYNC_SUCCESS, items })
  })
  .catch(() => {
    dispatch({ type: LOAD_ITEMS_ASYNC_FAILURE });
  });
}

export const handleNewSubmit = (url, body) => (dispatch) => {
  dispatch({ type: NEW_ITEM_ASYNC_REQUEST });

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
    dispatch({ type: NEW_ITEM_ASYNC_SUCCESS, newItem })
  })
  .catch(() => {
    dispatch({ type: NEW_ITEM_ASYNC_FAILURE });
  });
};

export const handleEditSubmit = (url, id, body) => (dispatch) => {
  dispatch({ type: EDIT_ITEM_ASYNC_REQUEST });

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
    dispatch({ type: EDIT_ITEM_ASYNC_SUCCESS, editedItem })
  })
  .catch(() => {
    dispatch({ type: EDIT_ITEM_ASYNC_FAILURE });
  });
};

export const handleDelete = (url, id) => (dispatch) => {
  dispatch({ type: DELETE_ITEM_ASYNC_REQUEST });

  return fetch(`${url}${id}`, {
    method: 'DELETE',
  })
  .then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  })
  .then(deletedItem => {
    dispatch({ type: DELETE_ITEM_ASYNC_SUCCESS, deletedItem })
  })
  .catch(() => {
    dispatch({ type: DELETED_ITEM_ASYNC_FAILURE });
  });
}
