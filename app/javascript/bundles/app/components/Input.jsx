import React from 'react';

import TextField from 'material-ui/TextField';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  inputChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  }

  inputSubmitHandler = (e) => {
    if (e.key === 'Enter') {
      this.props.handleSubmit(e.target.value)
      .then(() => this.setState({ value: '' }));
    }
  }

  render() {
    return <TextField
      label="New List"
      className="mb-2 w-100"
      helperText="helper text"
      value={this.state.value}
      onChange={this.inputChangeHandler}
      onKeyPress={this.inputSubmitHandler}
    />
  }
}

export default Input
