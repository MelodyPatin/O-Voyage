import React, { useState } from 'react';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  BellIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';
import User from '../User/User';
import Avatar from '../Avatar/Avatar';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

// Component for displaying user settings
const DropDownSettings = ({desktop}) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const onMobile = false;

  // Toggle function to switch between open and closed states
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <div className="DropDownMenu">
      <div className="dropdown-trigger" onClick={toggleMenu}>
        <div className="text">
          <Avatar className="avatar" />
          {desktop && <p className="notification-title">Vous</p>}
        </div>
      </div>
      {/* Dropdown content */}
      {isOpen && (
        <div className="dropdown-content settings">
          {onMobile && <XCircleIcon className="cross-icon" />}
          {!onMobile && (
            <ProfileInfo
              firstName="Mélody"
              nbTravels={5}
              nbFriends={10}
              id="info"
            />
          )}
          <ul>
            {/* Settings items */}
            <li className="item">Modifier mon profil</li>
            <li className="item">Mes amis</li>
            <li className="item">Ajouter un ami</li>
            <li className="item">Se déconnecter</li>
          </ul>
        </div>
      )}
    </div>
  );
};

DropDownSettings.propTypes = {
  desktop: PropTypes.bool,
};

export default DropDownSettings;
