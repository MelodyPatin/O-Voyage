import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// IconButton component for a button with an icon and text
const IconButton = ({ textContent, icon, onClick }) => (
  <Button onClick={onClick}>
    <Icon name={icon} /> {textContent}
  </Button>
);

IconButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  onClick: () => {},
};

export default IconButton;
