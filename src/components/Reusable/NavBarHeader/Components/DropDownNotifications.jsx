/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { BellIcon } from '@heroicons/react/24/solid';
import { useMediaQuery } from '@mui/material';

import './DropDownNotifications.scss';

import User from '../../User/User';

// Component for displaying notifications
const DropDownNotifications = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const newNotif = true;

  // Toggle function to switch between open and closed states
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="DropDownMenu">
      <div
        className="dropdown-trigger"
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
      >
        <div className="text">
          <BellIcon className="bell" />
          {newNotif && <div className="nb-notifs">3</div>}
          {/* Display notification title only on larger screens */}
          {!isMobile && <p className="notification-title">Notifications</p>}
        </div>
      </div>
      {/* Dropdown content */}
      {isOpen && (
        <div className="dropdown-content notification">
          <ul>
            <li className="item">
              <User firstName="Toto" textContent="a liké votre photo" user="" />
            </li>
            <li className="item">
              <User firstName="Toto" textContent="a liké votre photo" user="" />
            </li>
            <li className="item">
              <User firstName="Toto" textContent="a liké votre photo" user="" />
            </li>
            <li className="item">
              <User firstName="Toto" textContent="a liké votre photo" user="" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownNotifications;
