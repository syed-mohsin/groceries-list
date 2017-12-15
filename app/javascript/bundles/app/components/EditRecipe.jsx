import React from 'react';

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import AlarmIcon from 'material-ui-icons/Alarm';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

const styles = {
  media: {
    top:'-57',
    height: 225,
  },
};

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  componentDidMount() {
    const { url, match } = this.props;
    this.props.loadRecipe(url, match.params.id);
  }

  render() {
    const { name, notes, prep_time, steps, ingredients, classes } = this.state;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="http://www.seriouseats.com/images/2017/03/20170316-vegan-substitute-recipes-roundup-06.jpg"
          title="Vegan Nacho Dip Stock Photo"
        />
        <div className="p-3">
          <div className="d-flex justify-content-center align-items-center">
            <AlarmIcon /><div className="ml-2"><TextField value={`${prep_time || 0} mins`} /></div>
          </div>

          <Typography type="headline" component="h2">
            Notes
          </Typography>
          <TextField multiline fullWidth value={notes || 'Add some notes!'} />

          <Typography type="headline" component="h2" className="mt-2">
            Steps
          </Typography>
          <List>
            {steps.map((step, i) => (
              <ListItem key={step.id} className="pt-0 pb-1">
                <TextField fullWidth value={`${i}. ${step.instruction}`} />
                <IconButton aria-label="Delete"><DeleteIcon /></IconButton>
              </ListItem>
            ))}
          </List>

          <Typography type="headline" component="h2" className="mt-2">
            Ingredients
          </Typography>
          <List>
            {ingredients.map(ingredient => (
              <ListItem key={ingredient.id} className="pt-0 pb-1">
                <TextField fullWidth value={ingredient.content} />
                <TextField value={ingredient.quantity} />
                <IconButton aria-label="Delete"><DeleteIcon /></IconButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Card>
    )
  }
}

export default withStyles(styles)(EditRecipe);
