import { connect } from 'react-redux';
import List from '../components/List';
import generateActions from '../actions/actions';
import generateTypes from '../constants/listActionConstants';

const actions = generateActions(generateTypes('recipes'));

const mapStateToProps = state => ({
  ...state.recipes,
  listSubHeader: 'Your Recipes',
  url: '/api/v1/recipes/',
  loadUrl: '/api/v1/recipes/',
  inputValueKey: 'name',
  setInitialState: list => ({ name: list.name }),
  buildBody: body => ({ recipe: body }),
  primaryLabel: list => list.name,
  secondaryLabel: list => `${list.prep_time} min cooking time`,
  handleClick: (item, history) => history.push(`/recipes/${item.id}`),
  namespace: 'recipes',
});

const mapDispatchToProps = dispatch => ({
  ...actions,
});

export default connect(mapStateToProps, actions)(List);
