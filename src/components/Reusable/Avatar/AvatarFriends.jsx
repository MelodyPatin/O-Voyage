import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import './Avatar.scss';

// Avatar component that displays an image
const AvatarFriend = ({ userAvatar }) => <Image src={userAvatar} avatar />;

AvatarFriend.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
  }).isRequired,
};

AvatarFriend.propTypes = {
  userAvatar: PropTypes.string.isRequired,
};

export default AvatarFriend;
