import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.scss';
import { Icon } from 'semantic-ui-react';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="pages">
        {/* Navigation links section */}
        <NavLink
          className={({ isActive }) =>
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          }
          to="/faq"
        >
          FAQ
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          }
          to="/our-history"
        >
          Notre Histoire
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          }
          to="/legal-notice"
        >
          Mentions légales
        </NavLink>
      </div>
      {/* Social media icons section */}
      <div className="socials">
        <a href="#" target="_blank">
          <Icon name="facebook official" size="large" />
        </a>
        <a href="#" target="_blank">
          <Icon name="instagram" size="large" />
        </a>
        <a href="#" target="_blank">
          <Icon name="twitter" size="large" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
