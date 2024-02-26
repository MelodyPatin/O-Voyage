import React from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'semantic-ui-react';
import './Avatar.scss';

// Avatar component that displays an image
const Avatar = () => {
  // Use the useSelector hook to get the avatar from the Redux state
  const avatar = useSelector((state) => state.user.avatar);

  return <Image src={avatar} avatar />;
};

export default Avatar;
