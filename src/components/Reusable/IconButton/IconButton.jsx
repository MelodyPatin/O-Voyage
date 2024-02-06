import React from 'react';
import './IconButton.scss';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const IconButton = ({ textContent, icon }) => (
  <Button>
    <Icon name={icon} /> {textContent}
  </Button>
);

IconButton.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default IconButton;
