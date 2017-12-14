import React from 'react';

import { connect } from 'react-redux';

import { Field, reduxForm, reset } from 'redux-form'
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import PriceInput from '../components/PriceInput';

import generateActions from '../actions/actions';
import generateTypes from '../constants/listActionConstants';

const actions = generateActions(generateTypes('groceries'));

const renderTextField = props => {
  return <TextField label={props.label}
    error={props.error}
    helperText={props.touched && props.error}
    {...props}
    {...props.input}
  />
};

const renderPriceField = props => (
  <PriceInput label={props.label}
    error={props.error}
    helperText={props.touched && props.error}
    {...props}
    {...props.input}
  />
)

const ItemForm = ({ handleSubmit, match }) => (
  <form className="pl-3 pr-3 pt-3 pb-3" onSubmit={handleSubmit}>
    <Field name="content" component={renderTextField} label="Item Content" className="mb-2 w-100" />
    <Field name="price" component={renderPriceField} label="Price" className="mb-2 w-100" normalize={(input) => input.replace(/[,$]+/g, '')} />
    <Button type="submit" raised color="accent" className="mt-2 w-100">Add New Item</Button>
  </form>
);

const reduxedItemForm = reduxForm({
  form: 'ItemForm',
})(ItemForm);
console.log('new item', actions);
const onSubmit = (body, dispatch, ownProps) => {
  dispatch(actions.handleNewSubmit('/api/v1/items', { id: ownProps.match.params.id, ...body }))
  .then(() => dispatch(reset('ItemForm')));
}

const mapDispatchToProps = (dispatch, ownProps) => ({ onSubmit });

export default connect(null, mapDispatchToProps)(reduxedItemForm);
