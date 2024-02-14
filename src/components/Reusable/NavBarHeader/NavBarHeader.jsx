import { React } from 'react';
import { Link } from 'react-router-dom';
import './NavBarHeader.scss';
import Menu from './Menu';
import LoginLogoutButton from './LoginLogoutButton';

const NavBarHeader = () => {
  const logged = localStorage.getItem('logged');
  return (
    <div className="header">
      <Link to="/home">
        <img
          className="logo"
          src="/src/assets/MainLogo.png"
          alt="Logo O'Voyage"
        />
      </Link>
      {logged === "true" && <Menu />}
      {logged != "true" && <LoginLogoutButton />}
    </div>
  );
};

export default NavBarHeader;
