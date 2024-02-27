import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

import DropDownSettings from './DropDownSettings';
import DropDownNotifications from './DropDownNotifications';
import DesktopItems from './DesktopItems';

import './Menu.scss';

import { clickLogout } from '../../../../actions/user';

const Menu = () => {
  // Check if the view is in mobile mode
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle user logout
  const handleLogout = () => {
    dispatch(clickLogout());
    navigate('/');
  };

  return (
    <div className="menu">
      {/* Render desktop items if in desktop view */}
      {!isMobile && <DesktopItems />}
      {/* Render dropdown for notifications */}
      <div className="icon_label notifications">
        <DropDownNotifications />
      </div>
      {/* Render dropdown for user settings */}
      <div className="icon_label">
        <DropDownSettings handleLogout={handleLogout} />
      </div>
    </div>
  );
};

export default Menu;
