import React from 'react';
import PropTypes from 'prop-types';

import './Steps.scss';
import { Input } from 'semantic-ui-react';

import SimpleButton from '../Buttons/SimpleButton';

// Functional component : popup with input fields and a close button
const StepFolder = ({ buttonContent, labelContent }) => {
  return (
    <div className="StepFolder">
      {/* Form containing a label and an input field for file selection */}
      <form>
        <div className="LabelInput">
          <p>{labelContent}</p>
          {/* Input field for file selection */}
          <Input type="file" />
        </div>
        <SimpleButton textContent={buttonContent} />
      </form>
    </div>
  );
};

StepFolder.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
};

export default StepFolder;
