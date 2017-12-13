import React from 'react';

import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import Autocomplete from './Autocomplete';
import PriceInput from './PriceInput';

class Form extends React.Component {
  render() {
    return <div className="pl-3 pr-3 pt-3 pb-3">
      <Autocomplete placeholder="Search for an Item" />

      <Typography gutterBottom type="subheading" align="center" className="mt-4">
        Or
      </Typography>

      <TextField
        placeholder="New Item"
        className="mb-2 w-100"
        helperText="helper text"
      />

      <PriceInput placeholder="enter item price" />
      <Button raised color="accent" className="mt-2 w-100">Add New Item</Button>
    </div>
  }
}

export default Form;
