import React from 'react';
import './Popups.scss';
import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';

// Functional component : popup with a close buttona and a text message
const PopupMessage = ({ textContent }) => {
  return (
    <div className="containerBackground">
      <div className="Popup">
        <XCircleIcon className="icon" />
        <p>{textContent}</p>
      </div>
    </div>
  );
};

PopupMessage.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default PopupMessage;
