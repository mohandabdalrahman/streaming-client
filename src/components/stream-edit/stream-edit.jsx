import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../redux/actions/index';
import StreamForm from '../stream-form/stream-form';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    return (
      <div>
        <h3>Stream Edit</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, 'title', 'description')}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return {
    stream: streams[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStream: id => dispatch(fetchStream(id)),
    editStream: (id, formValues) => dispatch(editStream(id, formValues))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
