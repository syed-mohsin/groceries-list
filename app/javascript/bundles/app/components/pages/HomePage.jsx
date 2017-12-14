import React from 'react';

import ListsContainer from '../../containers/ListsContainer';
import NewListInput from '../../containers/NewListInput';

const HomePage = (props) => (
  <div>
    <ListsContainer {...props} />
    <div className="pl-3 pr-3"><NewListInput label="New List" /></div>

    {/* <RecipesListContainer /> */}

  </div>
);

export default HomePage;
