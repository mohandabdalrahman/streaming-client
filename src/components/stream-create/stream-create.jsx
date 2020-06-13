import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStreams } from '../../redux/actions/index';
import StreamForm from '../stream-form/stream-form';
class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStreams(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createStreams: formValues => dispatch(createStreams(formValues))
  };
};

export default connect(null, mapDispatchToProps)(StreamCreate);
