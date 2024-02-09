import React from 'react';
import './Step.scss';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../SimpleButton/SimpleButton';

// Functional component : popup with input fields and a close button
const Step = ({ textContent, buttonContent }) => {
  return (
    <div className="Step">
      <LabelInput placeholder={'Etape 1'} label={'Etape 1'} className="label-input" />
      <SimpleButton textContent={'Continuer'} />
    </div>
  );
};

Step.propTypes = {
  textContent: PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired,
};

export default Step;
