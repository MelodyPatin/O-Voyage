import React from 'react';
import './StepSelect.scss';
import PropTypes from 'prop-types';
import SimpleButton from '../SimpleButton/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';

// Functional component : popup with input fields and a close button
const StepSelect = ({
  buttonContent,
  placeholderContent,
  labelContent,
  options,
}) => {
  return (
    <div className="StepSelect">
      <div className="LabelInput">
        <p>{labelContent}</p>
        <MultipleSelector
          placeholder={placeholderContent}
          options={options}
        />
      </div>
      <SimpleButton textContent={buttonContent} />
    </div>
  );
};

StepSelect.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  placeholderContent: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StepSelect;
