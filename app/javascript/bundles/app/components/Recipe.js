import React from 'react';

class Recipe extends React.Component {
  componentDidMount() {
    const { url, match } = this.props;
    this.props.loadRecipe(url, match.params.id);
  }

  render() {
    const { name, notes, prep_time, steps, ingredients } = this.props;

    return <div>
      Recipe Name: {name}
      Recipe notes: {notes}
      Recipe prep time: {prep_time}
      Steps:
      { steps.map((step, i) => `Step ${i}: ${step.instruction}`) }
      Ingredients:
      { ingredients.map((ingredient, i) => `${ingredient.content}, ${ingredient.quantity}`) }
    </div>
  }
}

export default Recipe;
