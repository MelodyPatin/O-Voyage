import React from 'react';
import './NavBarMobile.scss';
import { Button } from 'semantic-ui-react';
import {
  HomeIcon,
  UserGroupIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

const NavBarMobile = ({ textContent }) => {
  return (
    <div className="NavBarMobileContainer">
      {/* List of Icons present in the mobile navbar */}
      <div className="NavBarMobile">
        <HomeIcon className="icon home" />
        <UserGroupIcon className="icon user" />
        <div className="circle">
          <PlusIcon className="plus" />
        </div>
        <PhotoIcon className="icon picture" />
        <ChatBubbleLeftRightIcon className="icon chat" />
      </div>
    </div>
  );
};

NavBarMobile.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default NavBarMobile;
