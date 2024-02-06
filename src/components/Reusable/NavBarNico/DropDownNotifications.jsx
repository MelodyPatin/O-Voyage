import React from 'react';
import PropTypes from 'prop-types';
import {
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  Dropdown,
} from 'semantic-ui-react';
import User from '../User/User';

const DropDownNotifications = ({ label }) => (
  <Dropdown text={label} direction="left">
    <DropdownMenu>
      <User firstName="Toto" textContent="a liké votre photo"/>
      <User firstName="Toto" textContent="a liké votre photo"/>
      <User firstName="Toto" textContent="a liké votre photo"/>
    </DropdownMenu>
  </Dropdown>
);

DropDownNotifications.propTypes = {
  label: PropTypes.string.isRequired,
};

export default DropDownNotifications;
