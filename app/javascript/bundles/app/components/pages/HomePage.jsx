import React from 'react';

import ListsContainer from '../../containers/ListsContainer';
import RecipesContainer from '../../containers/RecipesContainer';
import NewListInput from '../../containers/NewListInput';

const HomePage = (props) => (
  <div>
    <ListsContainer {...props} />
    <div className="pl-3 pr-3"><NewListInput label="New List" /></div>

    <RecipesContainer  {...props} />

  </div>
);

export default HomePage;
