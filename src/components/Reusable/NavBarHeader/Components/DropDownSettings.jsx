/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './DropDownSettings.scss';

import Avatar from '../../Avatar/Avatar';
import ProfileInfo from '../../ProfileInfo/ProfileInfo';

// Component for displaying user settings
const DropDownSettings = ({ handleLogout }) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  // Toggle function to switch between open and closed states
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="DropDownMenu">
      {/* Dropdown trigger */}
      <div
        className="dropdown-trigger"
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
      >
        <div className="text">
          <Avatar className="avatar" />
          {!isMobile && <p className="notification-title">Vous</p>}
        </div>
      </div>
      {/* Dropdown content */}
      {isOpen && (
        <div className="dropdown-content settings">
          {/* Display user profile information */}
          <ProfileInfo id="info" />
          <ul>
            {/* Settings items with navigation links */}
            <Link to="/me">
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
