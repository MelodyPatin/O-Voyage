import React from 'react';
import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';

const PopupUpdate = ({ textContent }) => {
  return (
    <div className="container">
      <div className="Popup Popup--update">
        <XCircleIcon className="icon" />
        <div>{textContent}</div>
      </div>
    </div>
  );
};

PopupUpdate.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default PopupUpdate;
