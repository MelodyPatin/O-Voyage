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
  const { tripId } = useParams(); // Get the 'id' parameter from the URL
  return (
    <div className="NavBarMobileContainer">
      {/* List of Icons present in the mobile navbar */}
      <div className="NavBarMobile">
        <Link to={`/trip/${tripId}`}>
          <HomeIcon className="icon home" />
        </Link>
        <Link to={`/trip/${tripId}/travelers`}>
          <UserGroupIcon className="icon user" />
        </Link>
        <div className="circle">
          <PlusIcon className="plus" />
        </div>
        <Link to={`/trip/${tripId}/gallery`}>
          <PhotoIcon className="icon picture" />
        </Link>
        <ChatBubbleLeftRightIcon className="icon chat" />
      </div>
    </div>
  );
};

export default NavBarMobile;
