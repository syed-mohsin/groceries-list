import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import DoneIcon from 'material-ui-icons/Done';
import Slide from 'material-ui/transitions/Slide';

const styles = {
  appBar: {
    position: 'relative',
    backgroundColor: '#FF9800',
  },
  flex: {
    flex: 1,
  },
};

const EditButton = ({ onClick }) => (
  <Button color="contrast" onClick={onClick}>
    <ModeEditIcon />
  </Button>
);

const SaveButton = ({ onClick }) => (
  <Button color="contrast" onClick={onClick}>
    <DoneIcon />
  </Button>
);

const Transition = props => (
  <Slide direction="up" {...props} />
);

class FullScreenDialog extends React.Component {
  handleRequestClose = () => {
    this.props.handleClose();
  };

  render() {
    const { classes, open, title, editMode,
            toggleEditMode, saveData } = this.props;

    return (
      <Dialog
        fullScreen
        open={open}
        onRequestClose={this.handleRequestClose}
        transition={Transition}
      >
        <AppBar className={classes.appBar} position="absolute">
          <Toolbar>
            <IconButton color="contrast" onClick={this.handleRequestClose} aria-label="Close">
              <ArrowBackIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              {title}
            </Typography>

            { editMode ?
                <SaveButton onClick={saveData} />
                :
                <EditButton onClick={toggleEditMode} />
            }
          </Toolbar>
        </AppBar>

        {this.props.children}
      </Dialog>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
