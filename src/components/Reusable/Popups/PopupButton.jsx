import React from 'react';
import './Popups.scss';
import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';
import SimpleButton from '../SimpleButton/SimpleButton';

// Functional component : popup with a close button, a text message and a button
const PopupButton = ({ textContent, buttonContent }) => {
  return (
    <div className="containerBackground">
      <div className="Popup">
        <XCircleIcon className="icon" />
        <p>{textContent}</p>
        <SimpleButton textContent={buttonContent} />
      </div>
    </div>
  );
};

PopupButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired,
};

export default PopupButton;
