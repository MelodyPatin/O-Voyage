import React from 'react';
import './Popups.scss';
import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';

const PopupMessage = ({ textContent }) => {
  return (
    <div className="container">
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
