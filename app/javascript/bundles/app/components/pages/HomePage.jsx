import React from 'react';

import ListsContainer from '../../containers/ListsContainer';
import NewListInput from '../../containers/NewListInput';

const HomePage = (props) => (
  <div>
    <ListsContainer {...props} />
    <div className="w-100 pl-3 pr-3"><NewListInput /></div>
  </div>
);

export default HomePage;
