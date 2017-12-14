import * as types from '../constants/recipeConstants';

export const loadRecipe = (url, id) => dispatch => {
  dispatch({ type: types.LOAD_RECIPE_ASYNC_REQUEST });

  return fetch(`${url}${id}`, {
    method: 'GET',
  })
  .then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  })
  .then(recipe => {
    dispatch({ type: types.LOAD_RECIPE_ASYNC_SUCCESS, recipe })
  })
  .catch(() => {
    dispatch({ type: types.LOAD_RECIPE_ASYNC_FAILURE });
  });
}
