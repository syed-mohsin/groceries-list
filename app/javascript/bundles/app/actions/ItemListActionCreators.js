/* eslint-disable import/prefer-default-export */

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

export const selectItemToEdit = (editItemId) => ({
  type: START_ITEM_EDIT,
  editItemId,
});

export const clearSelectedItemToEdit = () => ({
  type: CLEAR_ITEM_EDIT,
});

export const handleNewSubmit = (data) => (dispatch) => {
  dispatch({ type: NEW_ITEM_ASYNC_REQUEST });

  return fetch('/api/v1/items/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item: data })
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

export const handleEditSubmit = (id, data) => (dispatch) => {
  dispatch({ type: EDIT_ITEM_ASYNC_REQUEST });

  return fetch(`/api/v1/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item: data })
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

export const handleDelete = (id) => (dispatch) => {
  dispatch({ type: DELETE_ITEM_ASYNC_REQUEST });

  return fetch(`/api/v1/items/${id}`, {
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
