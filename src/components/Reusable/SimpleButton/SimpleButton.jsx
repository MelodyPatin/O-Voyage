import React from 'react';
import './SimpleButton.scss';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SimpleButton = ({ textContent }) => (
  <Button className="SimpleButton" content={textContent} />
);

SimpleButton.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default SimpleButton;
