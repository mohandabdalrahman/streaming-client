import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" to="/">
        Streamer
      </Link>
      <div className="right menu"></div>
      <Link className="item" to="/">
        All Streams
      </Link>{' '}
    </div>
  );
};

export default Header;
