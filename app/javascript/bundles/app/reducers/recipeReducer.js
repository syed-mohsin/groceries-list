import * as types from '../constants/recipeConstants';

const initialState = {
  id: '',
  name: '',
  notes: '',
  prep_time: 0,
  steps: [],
  ingredients: [],
  message: '',
}

const recipeReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOAD_RECIPE_ASYNC_REQUEST: {
      const message = 'loading recipe..';
      return { ...state, message };
    }

    case types.LOAD_RECIPE_ASYNC_SUCCESS: {
      const message = 'success';
      const { recipe } = action;

      return { ...recipe, message };
    }

    case types.LOAD_RECIPE_ASYNC_FAILURE: {
      const message = 'failed to load recipe';
      return { ...state, message };
    }

    case types.UPDATE_RECIPE_ASYNC_REQUEST: {
      const message = 'saving recipe..';
      return { ...state, message };
    }

    case types.UPDATE_RECIPE_ASYNC_SUCCESS: {
      const message = 'success';
      const { recipe } = action;

      return { ...recipe, message };
    }

    case types.UPDATE_RECIPE_ASYNC_FAILURE: {
      const message = 'failed to save recipe';
      return { ...state, message };
    }

    case types.ADD_RECIPE_STEP_ASYNC_REQUEST: {
      const message = 'loading recipe..';
      return { ...state, message };
    }

    case types.ADD_RECIPE_STEP_ASYNC_SUCCESS: {
      const message = 'success';
      const { recipe } = action;

      return { ...recipe, message };
    }

    case types.ADD_RECIPE_STEP_ASYNC_FAILURE: {
      const message = 'failed to load recipe';
      return { ...state, message };
    }

    default:
      return state;
  }
};

export default recipeReducer;
