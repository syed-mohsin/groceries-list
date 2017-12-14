const editRequest = (item, dispatch, toggle_property, typesGroup) => {
  const body = { ...item };
  body[toggle_property] = !body[toggle_property];

  dispatch({ type: typesGroup.request });

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
    dispatch({ type: typesGroup.success, editedItem })
  })
  .catch(() => {
    dispatch({ type: typesGroup.failure });
  });
};

const handleClick = types => item => dispatch => {
  const toggle_property = 'is_completed';
  const typesGroup = {
    request: types.TOGGLE_ITEM_COMPLETE_ASYNC_REQUEST,
    success: types.TOGGLE_ITEM_COMPLETE_ASYNC_SUCCESS,
    failure: types.TOGGLE_ITEM_COMPLETE_ASYNC_FAILURE,
  };

  return editRequest(
    item,
    dispatch,
    toggle_property,
    typesGroup,
  );
};

const handleCheck = types => item => dispatch => {
  const toggle_property = 'is_in_main_list';
  const typesGroup = {
    request: types.TOGGLE_ITEM_IN_MAIN_LIST_ASYNC_REQUEST,
    success: types.TOGGLE_ITEM_IN_MAIN_LIST_ASYNC_SUCCESS,
    failure: types.TOGGLE_ITEM_IN_MAIN_LIST_ASYNC_FAILURE,
  };

  return editRequest(
    item,
    dispatch,
    toggle_property,
    typesGroup,
  );
};

const generateActions = types => ({
  handleClick: handleClick(types),
  handleCheck: handleCheck(types),
});

export default generateActions;
