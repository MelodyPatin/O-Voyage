import React from 'react';
import PropTypes from 'prop-types';

import './Popups.scss';
import { XCircleIcon } from '@heroicons/react/24/solid';

import SimpleButton from '../Buttons/SimpleButton';

// Functional component : popup with a close button, a text message and a button
const PopupButton = ({
  textContent,
  buttonContent,
  onClose,
  onConfirmation,
}) => {
  return (
    // Container to cover the background when the popup is displayed
    <div className="containerBackground">
      <div className="Popup">
        <XCircleIcon className="icon" onClick={onClose} />
        <p>{textContent}</p>
        {/* Confirmation button that triggers the onConfirmation function */}
        <SimpleButton textContent={buttonContent} onClick={onConfirmation} />
      </div>
    </div>
  );
};

PopupButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirmation: PropTypes.func.isRequired,
};

export default PopupButton;
