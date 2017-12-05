/* eslint-disable import/prefer-default-export */

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

export const selectListToEdit = (editListId) => ({
  type: START_EDIT,
  editListId,
});

export const clearSelectedListToEdit = () => ({
  type: CLEAR_EDIT,
});

export const handleNewSubmit = (name) => (dispatch) => {
  dispatch({ type: NEW_ASYNC_REQUEST });

  return fetch('/api/v1/lists/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ list: { name }})
  })
  .then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  })
  .then(newList => {
    dispatch({ type: NEW_ASYNC_SUCCESS, newList })
  })
  .catch(() => {
    dispatch({ type: NEW_ASYNC_FAILURE });
  });
};

export const handleEditSubmit = (id, name) => (dispatch) => {
  dispatch({ type: EDIT_ASYNC_REQUEST });

  return fetch(`/api/v1/lists/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ list: { name }})
  })
  .then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  })
  .then(editedList => {
    dispatch({ type: EDIT_ASYNC_SUCCESS, editedList })
  })
  .catch(() => {
    dispatch({ type: EDIT_ASYNC_FAILURE });
  });
};

export const handleDelete = (id) => (dispatch) => {
  dispatch({ type: DELETE_ASYNC_REQUEST });

  return fetch(`/api/v1/lists/${id}`, {
    method: 'DELETE',
  })
  .then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  })
  .then(deletedList => {
    dispatch({ type: DELETE_ASYNC_SUCCESS, deletedList })
  })
  .catch(() => {
    dispatch({ type: DELETED_ASYNC_FAILURE });
  });
}
