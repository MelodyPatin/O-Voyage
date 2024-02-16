import React, { useState } from 'react';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  BellIcon,
} from '@heroicons/react/24/solid';
import { useMediaQuery } from '@mui/material';
import User from '../User/User';
import './dropDrownNotifications.scss';

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
      <div className="dropdown-trigger" onClick={toggleMenu}>
        <div className="text">
          <BellIcon className="bell" />
          {newNotif && <div className="nb-notifs">3</div>}
          {!isMobile && <p className="notification-title">Notifications</p>}
        </div>
      </div>
      {/* Dropdown content */}
      {isOpen && (
        <div className="dropdown-content notification">
          <ul>
            <li className="item">
              <User firstName="Toto" textContent="a liké votre photo" />
            </li>
            <li className="item">
              <User firstName="Toto" textContent="a liké votre photo" />
            </li>
            <li className="item">
              <User firstName="Toto" textContent="a liké votre photo" />
            </li>
            <li className="item">
              <User firstName="Toto" textContent="a liké votre photo" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownNotifications;
