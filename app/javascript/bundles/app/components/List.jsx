import PropTypes from 'prop-types';
import React from 'react';

import MuiList, { ListSubheader } from 'material-ui/List';
import Item from './Item';

class List extends React.Component {
  componentWillReceiveProps(newProps) {
    // we load new data here because componentWillUnmount of previous component gets called
    // AFTER componentWIllMount. This kicks off componentDidMount ignoring the now cleared
    // state, so that cleared state needs to be detected in componentWillReceiveProps
    if (JSON.stringify(this.props) !== JSON.stringify(newProps) && !newProps.items.length) {
      this.props.loadItems('/api/v1/lists/', this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.clearItems();
  }

  render() {
    const {
      items,
      selectItemToEdit,
      clearSelectedItemToEdit,
      listSubHeader,
      NewInput,
      ...remainingProps,
    } = this.props;

    return <div>
      <MuiList subheader={<ListSubheader>{listSubHeader}</ListSubheader>}>
        { items.map(item => (
          <Item
            key={item.id}
            item={item}
            editClickHandler={selectItemToEdit}
            deselectInput={clearSelectedItemToEdit}
            {...remainingProps}
          />
        ))}
      </MuiList>

      { NewInput && <NewInput /> }
    </div>
  }
}

export default List;
