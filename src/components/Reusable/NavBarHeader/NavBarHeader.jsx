import React from 'react';
import './NavBarHeader.scss';
import PropTypes from 'prop-types';
import Menu from './Menu';
import LoginLogoutButton from './LoginLogoutButton';

const NavBarHeader = () => {
  const isLogged = true;
  return (
    <div className="header">
      <img src="/src/assets/MainLogo.png" alt="Logo O'Voyage" />
      {isLogged && <Menu />}
      {!isLogged && <LoginLogoutButton />}
    </div>
  );
};
NavBarHeader.propTypes = {};
export default NavBarHeader;
