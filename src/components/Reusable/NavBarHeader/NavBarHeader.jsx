import { React } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './NavBarHeader.scss';

import Menu from './Components/Menu';
import LoginLogoutButton from './Components/LoginLogoutButton';

const NavBarHeader = () => {
  // Check if the user is logged in
  const logged = useSelector((state) => state.user.logged);

  return (
    <div className="header">
      <Link to="/dashboard">
        <img
          className="logo"
          src="/src/assets/MainLogo.png"
          alt="Logo O'Voyage"
        />
      </Link>
      {/* Display the menu if the user is logged in, otherwise display the login/logout button */}
      {logged && <Menu />}
      {!logged && <LoginLogoutButton />}
    </div>
  );
};

export default NavBarHeader;
