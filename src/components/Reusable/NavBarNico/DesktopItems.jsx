import {
  HomeIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid';

const DesktopItems = () => {
  return (
    <>
      <div className="icon_label">
        <HomeIcon className="icon" />
        <p>Accueil</p>
      </div>
      <div className="icon_label">
        <PhotoIcon className="icon" />
        <p>Galerie</p>
      </div>
      <div className="icon_label">
        <ChatBubbleLeftRightIcon className="icon" />
        <p>Message</p>
      </div>
    </>
  );
};
export default DesktopItems;
