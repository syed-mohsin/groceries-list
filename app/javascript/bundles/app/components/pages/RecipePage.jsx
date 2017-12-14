import React from 'react';

import Dialog from '../Dialog';

const RecipePage = props => (
  <Dialog open handleClose={() => props.history.go(-1)}>
    <h1>Hello!</h1>
  </Dialog>
);

export default RecipePage;
