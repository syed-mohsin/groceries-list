import {
  TOGGLE_ITEM_COMPLETE_ASYNC_REQUEST,
  TOGGLE_ITEM_COMPLETE_ASYNC_SUCCESS,
  TOGGLE_ITEM_COMPLETE_ASYNC_FAILURE,
  TOGGLE_ITEM_IN_MAIN_LIST_ASYNC_REQUEST,
  TOGGLE_ITEM_IN_MAIN_LIST_ASYNC_SUCCESS,
  TOGGLE_ITEM_IN_MAIN_LIST_ASYNC_FAILURE,
} from '../constants/listActionConstants';

const editRequest = (item, dispatch, toggle_property, types) => {
  const body = { ...item };
  body.is_in_main_list = !body.is_in_main_list;

  dispatch({ type: types.request });

  return fetch(`/api/v1/items/${item.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  .then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  })
  .then(editedItem => {
    dispatch({ type: types.success, editedItem })
  })
  .catch(() => {
    dispatch({ type: types.failure });
  });
};

export const handleClick = item => dispatch => {
  const toggle_property = 'is_completed';
  const types = {
    request: TOGGLE_ITEM_COMPLETED_ASYNC_REQUEST,
    success: TOGGLE_ITEM_COMPLETED_ASYNC_SUCCESS,
    failure: TOGGLE_ITEM_COMPLETED_ASYNC_FAILURE,
  };

  return editRequest(
    item,
    dispatch,
    toggle_property,
    types
  );
};

export const handleCheck = item => dispatch => {
  const toggle_property = 'is_in_main_list';
  const types = {
    request: TOGGLE_ITEM_IN_MAIN_LIST_ASYNC_REQUEST,
    success: TOGGLE_ITEM_IN_MAIN_LIST_ASYNC_SUCCESS,
    failure: TOGGLE_ITEM_IN_MAIN_LIST_ASYNC_FAILURE,
  };

  return editRequest(
    item,
    dispatch,
    toggle_property,
    types
  );
};
