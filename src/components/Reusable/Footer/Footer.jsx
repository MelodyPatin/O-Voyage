import React from 'react';
import './Footer.scss';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import PropTypes from 'prop-types';

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
          to="/histoire"
        >
          Notre Histoire
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'menu-link menu-link--active' : 'menu-link'
          }
          to="/mentions-legales"
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
