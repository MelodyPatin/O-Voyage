import React from 'react';
import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';
import "./Popups.scss"

const PopupUpdate = ({ textContent }) => {
  return (
    <div className="containerBackground">
      <div className="Popup Popup--update">
        <XCircleIcon className="icon" />
        <div>{textContent}</div>
      </div>
    </div>
  );
};

PopupUpdate.propTypes = {
  textContent: PropTypes.object.isRequired,
};

export default PopupUpdate;
