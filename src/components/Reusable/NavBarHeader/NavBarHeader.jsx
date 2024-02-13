import { React } from 'react';
import './NavBarHeader.scss';
import PropTypes from 'prop-types';
import Menu from './Menu';
import LoginLogoutButton from './LoginLogoutButton';

const NavBarHeader = ({ isLogged, onDesktop }) => {
  return (
    <div className="header">
      <img src="/src/assets/MainLogo.png" alt="Logo O'Voyage" />
      {isLogged && <Menu desktop={onDesktop} />}
      {!isLogged && <LoginLogoutButton />}
    </div>
  );
};
NavBarHeader.propTypes = {
  isLogged: PropTypes.bool,
  onDesktop: PropTypes.bool,
};
export default NavBarHeader;
