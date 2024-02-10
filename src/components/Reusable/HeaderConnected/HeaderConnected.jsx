import React from 'react';
import PropTypes from 'prop-types';
import NavBarHeader from '../NavBarHeader/NavBarHeader';
import Avatar from '../Avatar/Avatar';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

import './HeaderConnected.scss';

const HeaderConnected = ({ onDesktop }) => {
  return (
    <header className="headerConnected">
      <NavBarHeader isLogged onDesktop={onDesktop} />
      <div className="personnalInfos">
        <Avatar />
        <ProfileInfo firstName="Mélody" />
      </div>
    </header>
  );
};

HeaderConnected.propTypes = {
  onDesktop: PropTypes.bool,
};

export default HeaderConnected;