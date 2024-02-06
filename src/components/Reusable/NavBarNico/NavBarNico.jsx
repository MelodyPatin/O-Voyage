import React from 'react';
import './NavBarNico.scss';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import DropDownSettings from './DropDownSettings';
import DropDownNotifications from './DropDownNotifications';

const NavBarNico = () => {
  return (
    <div className="header">
      <img src="/src/assets/MainLogo.png" alt="Logo O'Voyage" />
      <div className="menu">
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
        <div className="icon_label">
          <Icon name="bell" size="large" />
          <DropDownNotifications label="Notifications" />
        </div>
        <div className="icon_label">
          <Avatar />
          <DropDownSettings label="Vous" />
        </div>
      </div>
    </div>
  );
};

NavBarNico.propTypes = {};

export default NavBarNico;
