import React from 'react';
import NavBarHeader from '../NavBarHeader/NavBarHeader';
import Avatar from '../Avatar/Avatar';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

import './HeaderConnected.scss'

const HeaderConnected = () => {
  return (
    <header className="headerConnected">
      <NavBarHeader isLogged onDesktop />
      <div className="personnalInfos">
        <Avatar />
        <ProfileInfo firstName="Mélody"/>
      </div>
    </header>
  );
};

export default HeaderConnected;