import React from 'react';
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

class NumberFormatCustom extends React.Component {
  render() {
    return (
      <NumberFormat
        {...this.props}
        className={this.props.className}
        onValueChange={values => {
          this.props.onChange(values.value);
        }}
        thousandSeparator
        prefix="$"
      />
    );
  }
}

class PriceInput extends React.Component {
  render() {
    const { label, helperText, error, className, ...remainingProps } = this.props;

    return (
      <FormControl className={className} error={error}>
        <InputLabel>{label}</InputLabel>
        <Input
          {...remainingProps}
          inputComponent={NumberFormatCustom}
          inputProps={{
            'aria-label': 'Item Price',
          }}
        />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
}

export default PriceInput;
