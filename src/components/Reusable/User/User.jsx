import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';
import AvatarFriend from '../Avatar/AvatarFriends';

// Component representing a user
const User = ({ user }) => {
  console.log(user.firstname); // Move the console.log outside JSX

  return (
    <div className="User">
      <AvatarFriend userAvatar={user.avatarURL} />
      {/* Render the Avatar component for user's profile image */}
      <span>
        {user.firstname} {user.lastname}
      </span>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    avatarURL: PropTypes.string,
  }).isRequired,
};

export default User;
