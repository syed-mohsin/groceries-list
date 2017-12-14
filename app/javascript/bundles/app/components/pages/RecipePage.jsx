import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/recipeActions';

import Dialog from '../Dialog';
import Recipe from '../Recipe';

const RecipePage = props => (
  <Dialog open handleClose={() => props.history.go(-1)} title={props.name}>
      <Recipe {...props} />
  </Dialog>
);

const mapStateToProps = state => ({
  ...state.recipe,
  url: '/api/v1/recipes/'
})

export default connect(mapStateToProps, actions)(RecipePage);
