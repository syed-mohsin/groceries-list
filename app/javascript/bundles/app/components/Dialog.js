import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import Slide from 'material-ui/transitions/Slide';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

class FullScreenDialog extends React.Component {
  handleRequestClose = () => {
    this.props.handleClose();
  };

  render() {
    const { classes, open, title } = this.props;

    return (
      <Dialog
        fullScreen
        open={open}
        onRequestClose={this.handleRequestClose}
        transition={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="contrast" onClick={this.handleRequestClose} aria-label="Close">
              <ArrowBackIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              {title}
            </Typography>
            <Button color="contrast" onClick={this.handleRequestClose}>
              <ModeEditIcon />
            </Button>
          </Toolbar>
        </AppBar>

        <div className="offset-md-3 col-md-6">
          {this.props.children}
        </div>
      </Dialog>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
