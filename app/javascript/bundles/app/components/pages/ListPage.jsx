import React from 'react';

import ItemsContainer from '../../containers/ItemsContainer';
import Form from '../Form';

const ListPage = (props) => (
  <div>
    <ItemsContainer {...props} />
    <Form />
  </div>
)

export default ListPage;
