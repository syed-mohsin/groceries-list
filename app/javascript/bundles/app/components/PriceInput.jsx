import React from 'react';
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';

class NumberFormatCustom extends React.Component {
  render() {
    return (
      <NumberFormat
        {...this.props}
        onValueChange={values => {
          this.props.onChange({
            target: {
              value: values.value,
            },
          });
        }}
        thousandSeparator
        prefix="$"
      />
    );
  }
}

class PriceInput extends React.Component {
  render() {
    return (
      <Input
        placeholder={this.props.placeholder}
        inputComponent={NumberFormatCustom}
        inputProps={{
          'aria-label': 'Item Price',
        }}
        className="w-100 mb-2"
      />
    );
  }
}

export default PriceInput;
