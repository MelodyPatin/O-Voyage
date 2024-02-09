import DropDownSettings from './DropDownSettings';
import DropDownNotifications from './DropDownNotifications';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import DesktopItems from './DesktopItems';

const Menu = ({ desktop }) => {
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
        <DropDownSettings desktop={desktop} />
      </div>
    </div>
  );
};

Menu.propTypes = {
  desktop: PropTypes.bool,
};

export default Menu;
