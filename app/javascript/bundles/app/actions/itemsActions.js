import {
  TOGGLE_ITEM_COMPLETE_ASYNC_REQUEST,
  TOGGLE_ITEM_COMPLETE_ASYNC_SUCCESS,
  TOGGLE_ITEM_COMPLETE_ASYNC_FAILURE,
} from '../constants/listActionConstants';

export const handleClick = item => dispatch => {
  const body = { ...item };
  body.is_completed = !body.is_completed;

  dispatch({ type: TOGGLE_ITEM_COMPLETE_ASYNC_REQUEST });

  return fetch(`/api/v1/items/${item.id}`, {
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
    dispatch({ type: TOGGLE_ITEM_COMPLETE_ASYNC_SUCCESS, editedItem })
  })
  .catch(() => {
    dispatch({ type: TOGGLE_ITEM_COMPLETE_ASYNC_FAILURE });
  });
};
