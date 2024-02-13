import { useDispatch } from 'react-redux';
import DropDownSettings from './DropDownSettings';
import DropDownNotifications from './DropDownNotifications';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import DesktopItems from './DesktopItems';
import { clickLogout } from '../../../actions/user';

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
            // TODO effacer le pseudo et le token dans le state, et passer logged
            // à false => dispatch action, traitée par le reducer user
            dispatch(clickLogout())
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
