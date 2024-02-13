import React from 'react';
import { Button } from 'semantic-ui-react';
import './SimpleButton.scss';
import PropTypes from 'prop-types';

const SimpleButton = ({ textContent, onClick }) => (
  <Button className="SimpleButton" content={textContent} onClick={onClick}/>
);

SimpleButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SimpleButton;
