import React from 'react';

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import AlarmIcon from 'material-ui-icons/Alarm';

const styles = {
  card: {
  },
  media: {
    top:'-57',
    height: 225,
  },
};

class Recipe extends React.Component {
  componentDidMount() {
    const { url, match } = this.props;
    this.props.loadRecipe(url, match.params.id);
  }

  render() {
    const { name, notes, prep_time, steps, ingredients, classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="http://www.seriouseats.com/images/2017/03/20170316-vegan-substitute-recipes-roundup-06.jpg"
          title="Vegan Nacho Dip Stock Photo"
        />
        <div className="p-3">
          <Typography type="subheader" className="d-flex justify-content-center align-items-center">
            <AlarmIcon /> <div className="ml-2">{prep_time || 0} mins</div>
          </Typography>

          <Typography type="headline" component="h2">
            Notes
          </Typography>
          <Typography component="p">
            {notes || 'Add some notes!'}
          </Typography>

          <Typography type="headline" component="h2" className="mt-2">
            Steps
          </Typography>
          <List>
            {steps.map((step, i) => (
              <ListItem key={step.id} className="pt-0 pb-1">
                <ListItemText primary={`${i}. ${step.instruction}`} />
              </ListItem>
            ))}
          </List>

          <Typography type="headline" component="h2" className="mt-2">
            Ingredients
          </Typography>
          <List >
            {ingredients.map(ingredient => (
              <ListItem key={ingredient.id} className="pt-0 pb-1">
                <ListItemText primary={ingredient.content} secondary={ingredient.quantity} />
              </ListItem>
            ))}
          </List>

          {/* Steps:
          { steps.map((step, i) => `Step ${i}: ${step.instruction}`) }
          Ingredients:
          { ingredients.map((ingredient, i) => `${ingredient.content}, ${ingredient.quantity}`) } */}
        </div>
      </Card>
    )
  }
}

export default withStyles(styles)(Recipe);
