import { BellIcon } from '@heroicons/react/24/solid';
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
        <BellIcon className="icon" />
        <DropDownNotifications label="Notifications" />
      </div>
      <div className="icon_label">
        <Avatar />
        <DropDownSettings label="Vous" />
      </div>
    </div>
  );
};
export default Menu;
