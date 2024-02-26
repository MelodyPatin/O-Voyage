import { React } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBarHeader.scss';
import Menu from './Components/Menu';
import LoginLogoutButton from './Components/LoginLogoutButton';
import Logo from '../../../assets/MainLogo.png';

const NavBarHeader = () => {
  const logged = useSelector((state) => state.user.logged);

  return (
    <div className="header">
      <Link to="/dashboard">
        <img
          className="logo"
          src={Logo}
          alt="Logo O'Voyage"
        />
      </Link>
      {logged && <Menu />}
      {!logged && <LoginLogoutButton />}
    </div>
  );
};

export default NavBarHeader;
