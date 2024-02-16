import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../SimpleButton/SimpleButton';
import { Select } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { handleStepNext } from '../../../actions/trip';

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
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleStepNext());
  };
  return (
    <div className="StepInputSelector">
      <LabelInput
        placeholder={placeholderInputContent}
        label={labelContent}
        value={valueInputContent}
        className="label-input"
      />
      <Select
        placeholderContent={placeholderSelectorContent}
        options={options}
        className="selector"
        city={city}
      />
      <SimpleButton textContent={buttonContent} onClick={handleClick} />
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
