import React from 'react';
import { Button } from 'semantic-ui-react';
import './SimpleButton.scss';
import PropTypes from 'prop-types';

// Button component for a button with text
const SimpleButton = ({ textContent, onClick }) => (
  <Button className="SimpleButton" content={textContent} onClick={onClick} />
);

SimpleButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SimpleButton.defaultProps = {
  onClick: () => {},
};

export default SimpleButton;
