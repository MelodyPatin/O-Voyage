import React from 'react';
import { Button } from 'semantic-ui-react';
import './SimpleButton.scss';
import PropTypes from 'prop-types';

const SimpleButton = ({ textContent }) => (
  <Button className="SimpleButton" content={textContent} />
);

SimpleButton.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default SimpleButton;
