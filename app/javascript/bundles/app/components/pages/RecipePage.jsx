import React from 'react';

import Dialog from '../Dialog';
import RecipeContainer from '../../containers/RecipeContainer';

const RecipePage = props => (
  <Dialog open handleClose={() => props.history.go(-1)}>
    <RecipeContainer {...props} />
  </Dialog>
);

export default RecipePage;
