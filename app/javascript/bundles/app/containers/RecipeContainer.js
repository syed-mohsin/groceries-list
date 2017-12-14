import { connect } from 'react-redux';
import Recipe from '../components/Recipe';
import * as actions from '../actions/recipeActions';

const mapStateToProps = state => ({
  ...state.recipe,
  url: '/api/v1/recipes/'
})

export default connect(mapStateToProps, actions)(Recipe);
