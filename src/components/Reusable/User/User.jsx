import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';
import AvatarFriend from '../Avatar/AvatarFriends';

// Component representing a user
const User = ({ user }) => (
  <div className="User">
    <AvatarFriend userAvatar={user.avatarURL} />
    {/* Render the Avatar component for user's profile image */}
    <span>
      {user.firstname} {user.lastname}
    </span>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    avatarURL: PropTypes.string,
  }).isRequired,
};

export default User;
