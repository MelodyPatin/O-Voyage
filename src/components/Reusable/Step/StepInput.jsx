import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../SimpleButton/SimpleButton';
import { handleStepNext } from '../../../actions/trip';

// Functional component : popup with input fields and a close button
const StepInput = ({
  inputValue,
  changeField,
  placeholderContent,
  buttonContent,
  labelContent,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleStepNext());
  };

  return (
    <div className="StepInput">
      <form autoComplete="off" onSubmit={handleClick}>
        <LabelInput
          label={labelContent}
          className="label-input"
          placeholder={placeholderContent}
          value={inputValue}
          name="tripTitle"
          type="text"
          onChange={changeField}
        />
        <SimpleButton textContent={buttonContent} onClick={handleClick} />
      </form>
    </div>
  );
};

StepInput.propTypes = {
  inputValue: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  placeholderContent: PropTypes.string,
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
};

export default StepInput;
