import {
  HomeIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid';

import { NavLink, useParams } from 'react-router-dom';
// Import NavLink from react-router-dom
import './desktopItems.scss';

const DesktopItems = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL

  return (
    <div className="desktopItems">
      {/* NavLinks with icon */}
      <NavLink className="icon_label" to={`/trip/${id}`}>
        <HomeIcon className="icon" />
        <p>Accueil</p>
      </NavLink>
      <NavLink className="icon_label" to="/galerie">
        <PhotoIcon className="icon" />
        <p>Galerie</p>
      </NavLink>
      <NavLink className="icon_label" to="/messagerie">
        <ChatBubbleLeftRightIcon className="icon" />
        <p>Messages</p>
      </NavLink>
    </div>
  );
};

export default DesktopItems;
