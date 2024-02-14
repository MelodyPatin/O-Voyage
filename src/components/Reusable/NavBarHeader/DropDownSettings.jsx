import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
const DropDownSettings = ({ desktop, handleLogout }) => {
  const firstName = localStorage.getItem('firstname');
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const onMobile = false;

  // Toggle function to switch between open and closed states
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
  desktop: PropTypes.bool,
  handleLogout: PropTypes.func.isRequired,
};

export default DropDownSettings;
