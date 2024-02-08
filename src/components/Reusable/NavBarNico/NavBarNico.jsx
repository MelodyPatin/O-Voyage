import React from 'react';
import './NavBarNico.scss';
import PropTypes from 'prop-types';
import Menu from './Menu';
import LoginLogoutButton from './LoginLogoutButton';

const NavBarNico = () => {
  const isLogged = true;
  return (
    <div className="header">
      <img src="/src/assets/MainLogo.png" alt="Logo O'Voyage" />
      {isLogged && <Menu />}
      {!isLogged && <LoginLogoutButton />}
    </div>
  );
};
NavBarNico.propTypes = {};
export default NavBarNico;
