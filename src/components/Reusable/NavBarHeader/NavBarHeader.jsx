import { React } from 'react';
import { Link } from 'react-router-dom';
import './NavBarHeader.scss';
import PropTypes from 'prop-types';
import Menu from './Menu';
import LoginLogoutButton from './LoginLogoutButton';

const NavBarHeader = ({ isLogged, onDesktop }) => {
  return (
    <div className="header">
      <Link to="/home">
        <img
          className="logo"
          src="/src/assets/MainLogo.png"
          alt="Logo O'Voyage"
        />
      </Link>
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
