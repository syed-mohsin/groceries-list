import React from 'react';

import ItemsContainer from '../../containers/ItemsContainer';
import ItemFormContainer from '../../containers/ItemFormContainer';

const ListPage = (props) => (
  <div>
    <ItemsContainer {...props} />
    <ItemFormContainer {...props} />
  </div>
)

export default ListPage;
