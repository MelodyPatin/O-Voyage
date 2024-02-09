import React from 'react';
import './StepSelect.scss';
import { Input, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../SimpleButton/SimpleButton';

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
        <Dropdown
          placeholder={placeholderContent}
          fluid
          multiple
          search
          selection
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
