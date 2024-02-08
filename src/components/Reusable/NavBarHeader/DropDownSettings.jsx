import React, { useState } from 'react';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  BellIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';
import User from '../User/User';
import Avatar from '../Avatar/Avatar';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

const DropDownSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onMobile = false;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <div className="DropDownMenu">
      <div className="dropdown-trigger" onClick={toggleMenu}>
        <div className="text">
          <Avatar className="avatar" />
          <p className="notification-title">Vous</p>
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-content settings">
          {/* Contenu du menu déroulant */}
          {onMobile && <XCircleIcon className="cross-icon" />}
          {!onMobile && <ProfileInfo
            firstName={'Mélody'}
            nbTravels={5}
            nbFriends={10}
            id="info"
          />}
          <ul>
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

export default DropDownSettings;
