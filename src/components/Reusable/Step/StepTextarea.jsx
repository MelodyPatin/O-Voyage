import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import './Steps.scss';
import { Form, TextArea } from 'semantic-ui-react';

import SimpleButton from '../Buttons/SimpleButton';

import { handleStepNext } from '../../../actions/trip';
import {
  clearErrorMessage,
  fetchFriends,
  setErrorMessage,
} from '../../../actions/user';

const StepTextarea = ({
  inputValue,
  changeField,
  placeholderContent,
  buttonContent,
  labelContent,
  name,
}) => {
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState(inputValue); // Local state for textarea value
  const errorMessage = useSelector((state) => state.user.errorMessage);

  // Unique ID for the input field
  const inputId = `field-${name}`;

  const handleFetchFriends = () => {
    dispatch(fetchFriends());
  };

  // Click handler for the button to proceed to the next step
  const handleClick = (e) => {
    e.preventDefault();
    // Dispatch an action to proceed to the next step
    dispatch(handleStepNext());
    // Fetch friends data
    handleFetchFriends();
    // Clear any error messages
    dispatch(clearErrorMessage());
  };

  // Change handler for updating the local state and dispatching changes to the parent component
  const handleChange = (evt) => {
    setTextValue(evt.target.value);
    changeField(evt.target.value, name); // Dispatch changes to the parent component
  };

  return (
    <div className="StepTextarea">
      <div className="LabelInput">
        <p>{labelContent}</p>
        <Form>
          <TextArea
            className="textarea"
            placeholder={placeholderContent}
            value={textValue}
            name={name}
            type="text"
            onChange={handleChange}
            id={inputId}
          />
        </Form>
      </div>
      {/* Display error message if present */}
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      <SimpleButton textContent={buttonContent} onClick={handleClick} />
    </div>
  );
};

StepTextarea.propTypes = {
  inputValue: PropTypes.string,
  placeholderContent: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

StepTextarea.defaultProps = {
  inputValue: '',
  placeholderContent: '',
};

export default StepTextarea;
