import { Icon } from 'semantic-ui-react';

const DesktopItems = () => {
  return (
    <>
      <div className="icon_label">
        <Icon name="home" size="large" />
        <p>Accueil</p>
      </div>
      <div className="icon_label">
        <Icon name="picture" size="large" />
        <p>Galerie</p>
      </div>
      <div className="icon_label">
        <Icon name="chat" size="large" />
        <p>Message</p>
      </div>
    </>
  );
};

export default DesktopItems;
