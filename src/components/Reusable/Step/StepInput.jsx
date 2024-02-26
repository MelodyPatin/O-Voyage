import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import './Steps.scss';

import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../Buttons/SimpleButton';

import { handleStepNext } from '../../../actions/trip';
import { clearErrorMessage, setErrorMessage } from '../../../actions/user';

// Functional component : popup with input fields and a close button
const StepInput = ({
  inputValue,
  changeField,
  placeholderContent,
  buttonContent,
  labelContent,
  name,
}) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.user.errorMessage);

  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Check if the field is empty
    if (!inputValue.trim()) {
      dispatch(setErrorMessage('Ce champ ne peut pas être vide.'));
      return;
    }

    // If the field is not empty, proceed to the next step
    dispatch(handleStepNext());
    dispatch(clearErrorMessage());
  };

  return (
    <div className="StepInput">
      <form autoComplete="off" onSubmit={handleClick}>
        <LabelInput
          label={labelContent}
          className="label-input"
          placeholder={placeholderContent}
          value={inputValue}
          name={name}
          type="text"
          onChange={changeField}
        />
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <SimpleButton textContent={buttonContent} onClick={handleClick} />
      </form>
    </div>
  );
};

StepInput.propTypes = {
  inputValue: PropTypes.string,
  placeholderContent: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

StepInput.defaultProps = {
  inputValue: '',
  placeholderContent: '',
};

export default StepInput;
