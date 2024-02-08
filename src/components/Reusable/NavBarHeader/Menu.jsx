import DropDownSettings from './DropDownSettings';
import DropDownNotifications from './DropDownNotifications';
import Avatar from '../Avatar/Avatar';
import DesktopItems from './DesktopItems';

const Menu = () => {
  const desktop = true;
  return (
    <div className="menu">
      {desktop && <DesktopItems />}
      <div className="icon_label">
        <DropDownNotifications />
      </div>
      <div className="icon_label">
        <DropDownSettings />
      </div>
    </div>
  );
};
export default Menu;
