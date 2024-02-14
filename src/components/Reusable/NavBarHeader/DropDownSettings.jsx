import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  BellIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import './dropDownSettings.scss';

// Component for displaying user settings
const DropDownSettings = ({ handleLogout }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const firstName = localStorage.getItem('firstname');
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  // Toggle function to switch between open and closed states
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="DropDownMenu">
      <div className="dropdown-trigger" onClick={toggleMenu}>
        <div className="text">
          <Avatar className="avatar" />
          {!isMobile && <p className="notification-title">Vous</p>}
        </div>
      </div>
      {/* Dropdown content */}
      {isOpen && (
        <div className="dropdown-content settings">
          <ProfileInfo
            firstName="Mélody"
            nbTravels={5}
            nbFriends={10}
            id="info"
          />
          <ul>
            {/* Settings items */}
            <Link to={`/${firstName}`}>
              <li className="item">Modifier mon profil</li>
            </Link>
            <Link to="/friends">
              <li className="item">Mes amis</li>
            </Link>
            <Link to="/friends/add">
              <li className="item">Ajouter un ami</li>
            </Link>
            <li className="item" onClick={handleLogout}>
              Se déconnecter
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

DropDownSettings.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default DropDownSettings;
