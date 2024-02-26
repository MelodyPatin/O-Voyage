import React from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Avatar.scss';

// Avatar component that displays an image
const AvatarCreators = ({picture}) => {
  // Use the useSelector hook to get the avatar from the Redux state
  const avatar = useSelector((state) => state.user.avatar);

  return <Image src={picture} avatar />;
};

AvatarCreators.propTypes = {
  picture: PropTypes.string.isRequired,
};

export default AvatarCreators;
