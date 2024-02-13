import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DropDownSettings from './DropDownSettings';
import DropDownNotifications from './DropDownNotifications';
import DesktopItems from './DesktopItems';
import { clickLogout } from '../../../actions/user';
import './menu.scss';

const Menu = ({ desktop }) => {
  const dispatch = useDispatch();

  return (
    <div className="menu">
      {/* Render desktop items if in desktop view */}
      {desktop && <DesktopItems />}
      {/* Render dropdown for notifications */}
      <div className="icon_label">
        <DropDownNotifications desktop={desktop} />
      </div>
      {/* Render dropdown for user settings */}
      <div className="icon_label">
        <DropDownSettings
          handleLogout={() => {
            dispatch(clickLogout());
          }}
          desktop={desktop}
        />
      </div>
    </div>
  );
};

Menu.propTypes = {
  desktop: PropTypes.bool,
};

export default Menu;
