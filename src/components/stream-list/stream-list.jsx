import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../redux/actions/index';
import { Link } from 'react-router-dom';
class StreamList extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    const { userId } = this.props.auth;
    if (stream.userId === userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative "
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned camera icon"></i>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  rendercreate = () => {
    const { isSignedIn } = this.props.auth;
    if (isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link className="ui button primary" to="/streams/new">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.rendercreate()}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStreams: () => dispatch(fetchStreams())
  };
};

const mapStateToProps = ({ streams, auth }) => {
  return {
    streams: Object.values(streams),
    auth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
