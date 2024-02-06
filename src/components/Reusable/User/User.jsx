import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';

const User = ({ firstName, lastName, textContent }) => (
  <div className="User">
  <Avatar />
    <span>
      {firstName} {lastName} {textContent}
    </span>
  </div>
);

User.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  textContent: PropTypes.string,
};

export default User;
