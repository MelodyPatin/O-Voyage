import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const IconButton = ({ textContent, icon, onClick }) => (
  <Button onClick={onClick}> {/* Ajout de onClick sur le bouton */}
    <Icon name={icon} /> {textContent}
  </Button>
);

IconButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // Ajout de onClick dans les propTypes
};

IconButton.defaultProps = {
  onClick: () => {}, // Fonction vide par défaut
};

export default IconButton;
