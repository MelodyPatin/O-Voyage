import React from 'react';
import './Popups.scss';
import PropTypes from 'prop-types';
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
    <div className="containerBackground">
      <div className="Popup">
        <XCircleIcon className="icon" onClick={onClose} />
        <p>{textContent}</p>
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
