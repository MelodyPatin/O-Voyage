import { NavLink, useParams } from 'react-router-dom';

import {
  HomeIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid';

import './DesktopItems.scss';

const DesktopItems = () => {
  // Get the 'id' parameter from the URL
  const { tripId } = useParams();

  return (
    <div className="desktopItems">
      {/* NavLinks with icon */}
      {/* <NavLink className="icon_label" to={`/trip/${tripId}`}>
        <HomeIcon className="icon" />
        <p>Accueil</p>
      </NavLink> */}
      {/* <NavLink className="icon_label" to={`/trip/${tripId}/gallery`}>
        <PhotoIcon className="icon" />
        <p>Galerie</p>
      </NavLink> */}
      {/* <NavLink className="icon_label" to="/messagerie">
        <ChatBubbleLeftRightIcon className="icon" />
        <p>Messages</p>
      </NavLink> */}
    </div>
  );
};

export default DesktopItems;
