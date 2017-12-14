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
    case 'LOAD_RECIPE_ASYNC_REQUEST': {
      const message = 'loading recipe..';
      return { ...state, message };
    }

    case 'LOAD_RECIPE_ASYNC_SUCCESS': {
      const message = 'success';
      const { recipe } = action;

      return { ...recipe, message };
    }

    case 'LOAD_RECIPE_ASYNC_FAILURE': {
      const message = 'failed to load recipe';
      return { ...state, message };
    }

    default:
      return state;
  }
};

export default recipeReducer;
