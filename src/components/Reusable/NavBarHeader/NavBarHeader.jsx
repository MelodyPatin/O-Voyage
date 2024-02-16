import { React } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBarHeader.scss';
import Menu from './Menu';
import LoginLogoutButton from './LoginLogoutButton';

const NavBarHeader = () => {
  const logged = useSelector((state) => state.user.logged);

  return (
    <div className="header">
      <Link to="/home">
        <img
          className="logo"
          src="/src/assets/MainLogo.png"
          alt="Logo O'Voyage"
        />
      </Link>
      {logged && <Menu />}
      {!logged && <LoginLogoutButton />}
    </div>
  );
};

export default NavBarHeader;
