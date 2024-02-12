import React from 'react';
import './Steps.scss';
import { Form, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../SimpleButton/SimpleButton';

// Functional component : popup with input fields and a close button
const StepTextarea = ({
  buttonContent,
  labelContent,
  placeholderContent,
  textareaContent,
  options,
  valueContent,
}) => {
  return (
    <div className="StepTextarea">
      <div className="LabelInput">
        <p>{labelContent}</p>
        <Form>
          <TextArea placeholder={textareaContent} value={valueContent} />
        </Form>
      </div>
      <SimpleButton textContent={buttonContent} />
    </div>
  );
};

StepTextarea.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  placeholderContent: PropTypes.string,
  textareaContent: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  valueContent: PropTypes.string,
};

export default StepTextarea;
