import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './NavBarMobile.scss';
import {
  HomeIcon,
  UserGroupIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

const NavBarMobile = () => {
  // Access the current location and parameters from the URL
  const location = useLocation();
  const { tripId } = useParams();

  // Determine the 'add' link based on the current path
  let addLink;
  switch (location.pathname) {
    case `/trip/${tripId}`:
      addLink = '/createactivity';
      break;
    case `/trip/${tripId}/travelers`:
      addLink = `/trip/${tripId}/addtravelers`;
      break;
    case `/trip/${tripId}/gallery`:
      addLink = `/trip/${tripId}/addpicture`;
      break;
    default:
      addLink = '';
  }

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
        <Link to={addLink}>
          <div className="circle">
            <PlusIcon className="plus" />
          </div>
        </Link>
        <Link to={`/trip/${tripId}/gallery`}>
          <PhotoIcon className="icon picture" />
        </Link>
        <ChatBubbleLeftRightIcon className="icon chat" />
      </div>
    </div>
  );
};

export default NavBarMobile;
