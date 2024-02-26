import React from 'react';
import './Popups.scss';
import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';

// Functional component : popup with a close buttona and a text message
const PopupMessage = ({ textContent, onClose }) => {
  return (
    // Container to cover the background when the popup is displayed
    <div className="containerBackground">
      <div className="Popup">
        <XCircleIcon className="icon" onClick={onClose} />
        <p>{textContent}</p>
      </div>
    </div>
  );
};

PopupMessage.propTypes = {
  textContent: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopupMessage;
