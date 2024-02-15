import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../SimpleButton/SimpleButton';

// Functional component : popup with input fields and a close button
const StepInputSelector = ({
  buttonContent,
  placeholderInputContent,
  placeholderSelectorContent,
  labelContent,
  valueInputContent,
  options,
  city,
}) => {
  return (
    <div className="stepInputSelector">
      <form action="">
        <LabelInput
          placeholder={placeholderInputContent}
          label={labelContent}
          value={valueInputContent}
          className="label-input"
        />
        <div className="LabelInput">
          <p className="label">Renseignez le pays</p>
          <Select
            placeholderContent={placeholderSelectorContent}
            options={options}
            className="selector"
            city={city}
          />
        </div>
        <SimpleButton textContent={buttonContent} />
      </form>
    </div>
  );
};

StepInputSelector.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  placeholderInputContent: PropTypes.string,
  placeholderSelectorContent: PropTypes.string,
  valueInputContent: PropTypes.string,
  city: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StepInputSelector;
