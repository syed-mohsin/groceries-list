import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from 'material-ui/styles';
import MuiList, { ListSubheader } from 'material-ui/List';
import Item from './Item';

const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
  },
});

class List extends React.Component {
  componentDidMount() {
    const { loadUrl, match, query } = this.props;
    this.props.loadItems(loadUrl, match.params.id, query);
  }

  componentWillUnmount() {
    this.props.clearItems();
  }

  render() {
    const {
      classes,
      items,
      listSubHeader,
      noItemsMessage,
      message,
      ...remainingProps,
    } = this.props;

    return <div>
      <MuiList subheader={<ListSubheader>{listSubHeader}</ListSubheader>} className={classes.root}>
        { items.map(item => (
          <Item
            key={item.id}
            item={item}
            {...remainingProps}
          />
        ))}

        { !items.length && message === 'success' && <h5 className="pl-3">{'nothing to see here!'}</h5>}
      </MuiList>
    </div>
  }
}

export default withStyles(styles)(List);
