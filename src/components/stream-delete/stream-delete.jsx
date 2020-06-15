import React, { Component } from 'react';
import Modal from '../modal/modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../redux/actions/index';
import { Link } from 'react-router-dom';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.stream) return 'Are you sure you want to delete stream?';
    return `Are you sure you want to delete stream with title: ${this.props.stream.title}?`;
  }

  render() {
    const actions = (
      <>
        <Link to="/" className="ui primary button">
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui negative button"
        >
          Delete
        </button>
      </>
    );
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStream: id => dispatch(fetchStream(id)),
    deleteStream: id => dispatch(deleteStream(id))
  };
};

const mapStateToProps = ({ streams }, ownProps) => {
  return {
    stream: streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);
