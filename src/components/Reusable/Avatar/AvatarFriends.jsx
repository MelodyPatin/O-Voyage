import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

// AvatarFriend component that displays an image
const AvatarFriend = ({ userAvatar }) => <Image src={userAvatar} avatar />;

AvatarFriend.propTypes = {
  userAvatar: PropTypes.string.isRequired,
};

export default AvatarFriend;
