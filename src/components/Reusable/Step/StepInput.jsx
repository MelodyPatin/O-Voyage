import React from 'react';
import './StepInput.scss';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../SimpleButton/SimpleButton';

// Functional component : popup with input fields and a close button
const StepInput = ({ buttonContent, placeholderContent, labelContent, valueContent }) => {
  return (
    <div className="StepInput">
      <LabelInput placeholder={placeholderContent} label={labelContent} value={valueContent} className="label-input" />
      <SimpleButton textContent={buttonContent} />
    </div>
  );
};

StepInput.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  placeholderContent: PropTypes.string,
  valueContent: PropTypes.string,
};

export default StepInput;
