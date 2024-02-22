import { useDispatch } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import DropDownSettings from './DropDownSettings';
import DropDownNotifications from './DropDownNotifications';
import DesktopItems from './DesktopItems';
import './Menu.scss';
import { clickLogout } from '../../../../actions/user';

const Menu = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const dispatch = useDispatch();

  return (
    <div className="menu">
      {/* Render desktop items if in desktop view */}
      {/* {!isMobile && <DesktopItems />} */}
      {/* Render dropdown for notifications */}
      <div className="icon_label notifications">
        <DropDownNotifications />
      </div>
      {/* Render dropdown for user settings */}
      <div className="icon_label">
        <DropDownSettings
          handleLogout={() => {
            dispatch(clickLogout());
          }}
        />
      </div>
    </div>
  );
};

export default Menu;
