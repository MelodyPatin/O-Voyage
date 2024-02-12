import React from 'react';
import './Steps.scss';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../SimpleButton/SimpleButton';

// Functional component : popup with input fields and a close button
const StepFolder = ({ buttonContent, labelContent }) => {
  return (
    <div className="StepFolder">
      <div className="LabelInput">
        <p>{labelContent}</p>
        <Input type="file" />
      </div>
      <SimpleButton textContent={buttonContent} />
    </div>
  );
};

StepFolder.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
};

export default StepFolder;
