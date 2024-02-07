import React from 'react';
import './Popups.scss';
import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';
import SimpleButton from '../SimpleButton/SimpleButton';

const PopupButton = ({ textContent }) => {
  return (
    <div className="container">
      <div className="Popup">
        <XCircleIcon className="icon" />
        <p>{textContent}</p>
        <SimpleButton textContent='Confirmer' />
      </div>
    </div>
  );
};

PopupButton.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default PopupButton;
