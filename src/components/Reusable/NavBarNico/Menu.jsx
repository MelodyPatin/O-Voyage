import DropDownSettings from './DropDownSettings';
import DropDownNotifications from './DropDownNotifications';
import { Icon } from 'semantic-ui-react';
import Avatar from '../Avatar/Avatar';
import DesktopItems from './DesktopItems';
const Menu = () => {
  const desktop = true;
  return (
    <div className="menu">
      {desktop && <DesktopItems />}
      <div className="icon_label">
        <Icon name="bell" size="large" />
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