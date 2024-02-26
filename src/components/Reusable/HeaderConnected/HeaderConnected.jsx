import React from 'react';

import NavBarHeader from '../NavBarHeader/NavBarHeader';
import Avatar from '../Avatar/Avatar';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

import './HeaderConnected.scss';

// HeaderConnected component displaying a connected user's information
const HeaderConnected = () => {
  return (
    <header className="headerConnected">
      <NavBarHeader />
      {/* Section for personal information, including avatar and profile info */}
      <div className="personnalInfos">
        <Avatar />
        <ProfileInfo />
      </div>
    </header>
  );
};

export default HeaderConnected;
