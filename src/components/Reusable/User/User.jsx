import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';

// Component representing a user
const User = ({ firstName, lastName, textContent }) => (
  <div className="User">
    <Avatar /> {/* Render the Avatar component for user's profile image */}
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
