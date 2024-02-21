import React from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'semantic-ui-react';

// Avatar component that displays an image
const Avatar = () => {
  const avatar = useSelector((state) => state.user.avatar);

  return <Image src={avatar} avatar />;
};

export default Avatar;
