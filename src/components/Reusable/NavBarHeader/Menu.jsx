import DropDownSettings from './DropDownSettings';
import DropDownNotifications from './DropDownNotifications';
import Avatar from '../Avatar/Avatar';
import DesktopItems from './DesktopItems';

const Menu = () => {
  const desktop = true;
  return (
    <div className="menu">
      {/* Render desktop items if in desktop view */}
      {desktop && <DesktopItems />}
      {/* Render dropdown for notifications */}
      <div className="icon_label">
        <DropDownNotifications />
      </div>
      {/* Render dropdown for user settings */}
      <div className="icon_label">
        <DropDownSettings />
      </div>
    </div>
  );
};
export default Menu;
