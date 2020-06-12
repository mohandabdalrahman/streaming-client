import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamCreate extends Component {
  state = {};

  renderInput({ input: { value, onChange }, label, meta }) {
    return (
      <div className={`field  ${meta.error && meta.touched ? 'error' : ''}`}>
        <label>{label}</label>
        <input value={value} onChange={onChange} autoComplete="off" />
        {meta.touched ? (
          <div className="ui error message">
            <div className="header">{meta.error}</div>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
  onSubmit(formValues) {
    console.log('onSubmit -> formValues', formValues);
  }
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
