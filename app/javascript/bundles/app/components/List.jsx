import PropTypes from 'prop-types';
import React from 'react';

import MuiList, { ListSubheader } from 'material-ui/List';
import Item from './Item';

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
      items,
      listSubHeader,
      ...remainingProps,
    } = this.props;

    return <div>
      <MuiList subheader={<ListSubheader>{listSubHeader}</ListSubheader>}>
        { items.map(item => (
          <Item
            key={item.id}
            item={item}
            {...remainingProps}
          />
        ))}
      </MuiList>
    </div>
  }
}

export default List;
