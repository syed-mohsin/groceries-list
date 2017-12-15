import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/recipeActions';

import Dialog from '../Dialog';
import Recipe from '../Recipe';
import EditRecipe from '../EditRecipe';

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false };
  }

  toggleEditMode = () => {
    console.log('toggleee')
    let editMode = !this.state.editMode;
    this.setState({ editMode });
  }

  saveData = () => {
    
    this.toggleEditMode(); // on success
    // update local recipe state
    // post recipe state and persist to database
  }

  render() {
    return (
      <Dialog
        open
        handleClose={() => this.props.history.go(-1)}
        title={this.props.name}
        editMode={this.state.editMode}
        toggleEditMode={this.toggleEditMode}
        saveData={this.saveData}
        >
          {this.state.editMode ? <EditRecipe {...this.props} /> : <Recipe {...this.props} />}
      </Dialog>
    )
  }
}

const mapStateToProps = state => ({
  ...state.recipe,
  url: '/api/v1/recipes/'
})

export default connect(mapStateToProps, actions)(RecipePage);
