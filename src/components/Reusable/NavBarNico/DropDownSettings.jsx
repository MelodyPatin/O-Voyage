import React from 'react';
import PropTypes from 'prop-types';
import {
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  Dropdown,
} from 'semantic-ui-react';

const DropDownSettings = ({ label }) => (
  <Dropdown text={label} direction="left">
    <DropdownMenu>
      <DropdownItem text="Modifier mon profil" />
      <DropdownItem text="Mes amis" />
      <DropdownItem text="Ajouter un ami" />
      <DropdownItem text="Se déconnecter" />
    </DropdownMenu>
  </Dropdown>
);

DropDownSettings.propTypes = {
  label: PropTypes.string.isRequired,
};

export default DropDownSettings;
