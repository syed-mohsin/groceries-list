import PropTypes from 'prop-types';
import React from 'react';

export default class List extends React.Component {
  static propTypes = {
    lists: PropTypes.array.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    const { lists } = this.props;
    this.state = { lists };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    const { lists } = this.state;

    return (
      <ul>
        { lists.map(list => <li key={list.id}>{list.name}</li>)}
      </ul>
    );
  }
}
