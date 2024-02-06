import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';

const User = ({ firstName, lastName }) => (
  <div className="User">
  <Avatar />
    <span>
      {firstName} {lastName}
    </span>
  </div>
);

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default User;
