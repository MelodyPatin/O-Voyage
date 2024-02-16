import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './NavBarMobile.scss';
import {
  HomeIcon,
  UserGroupIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

const NavBarMobile = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  return (
    <div className="NavBarMobileContainer">
      {/* List of Icons present in the mobile navbar */}
      <div className="NavBarMobile">
        <Link to={`/trip/${id}`}>
          <HomeIcon className="icon home" />
        </Link>
        <Link to={`/trip/${id}/travelers`}>
          <UserGroupIcon className="icon user" />
        </Link>
        <div className="circle">
          <PlusIcon className="plus" />
        </div>
        <PhotoIcon className="icon picture" />
        <ChatBubbleLeftRightIcon className="icon chat" />
      </div>
    </div>
  );
};

export default NavBarMobile;
