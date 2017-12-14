import React from 'react';

import ListsContainer from '../../containers/ListsContainer';
import RecipesContainer from '../../containers/RecipesContainer';
import NewListInput from '../../containers/NewListInput';
import NewRecipeInput from '../../containers/NewRecipeInput';

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
  },
});

const HomePage = (props) => (
  <div>
    <ListsContainer {...props} />
    <div className={classNames({[props.classes.root]: true, 'pl-3 pr-3 pb-2 mb-3': true})}>
      <NewListInput label="New List" />
    </div>

    <RecipesContainer  {...props} />
    <div className={classNames({[props.classes.root]: true, 'pl-3 pr-3 pb-2 mb-3': true})}>
      <NewRecipeInput label="New Recipe" />
    </div>

  </div>
);

export default withStyles(styles)(HomePage);
