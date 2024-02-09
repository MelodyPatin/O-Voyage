import React from 'react';
import './Popups.scss';
import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { Input } from 'semantic-ui-react';
import SimpleButton from '../SimpleButton/SimpleButton';
import LabelInput from '../LabelInput/LabelInput';

// Functional component : popup with input fields and a close button
const PopupInput = ({ textContent, buttonContent }) => {
  return (
    <div className="container">
      <div className="Popup">
        <XCircleIcon className="icon" />
        <p>{textContent}</p>
        <Input placeholder="Prénom" />
        <Input placeholder="Nom" />
        <Input placeholder="Email" />
        <Input placeholder="Mot de passe" />
        <SimpleButton textContent={buttonContent} />
      </div>
    </div>
  );
};

PopupInput.propTypes = {
  textContent: PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired,
};

export default PopupInput;
