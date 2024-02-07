import React from 'react';
import './NavBarMobile.scss';
import { Button } from 'semantic-ui-react';
import {
  HomeIcon,
  UserGroupIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

const NavBarMobile = ({ textContent }) => {
  return (
    <div className="NavBarMobile">
      <HomeIcon className="icon" />
      <UserGroupIcon className="icon" />
      <PlusCircleIcon className="icon solid" />
      <PhotoIcon className="icon" />
      <ChatBubbleLeftRightIcon className="icon" />
    </div>
  );
};

NavBarMobile.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default NavBarMobile;
