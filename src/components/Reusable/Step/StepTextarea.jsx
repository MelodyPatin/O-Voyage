import React, { useState } from 'react';
import './Steps.scss';
import { Form, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SimpleButton from '../Buttons/SimpleButton';
import { useDispatch, useSelector } from 'react-redux';
import { handleStepNext } from '../../../actions/trip';
import { clearErrorMessage, fetchFriends, setErrorMessage } from '../../../actions/user';

const StepTextarea = ({
  inputValue,
  changeField,
  placeholderContent,
  buttonContent,
  labelContent,
  name,
}) => {
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState(inputValue);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  const inputId = `field-${name}`;

  const handleClick = (e) => {
    e.preventDefault();
    if (textValue.trim() === '') {
      dispatch(setErrorMessage('Veuillez entrer du texte dans le champ.'));
      return; // Arrêter la progression si le champ est vide
    }

    dispatch(handleStepNext());
    handleFetchFriends();
    dispatch(clearErrorMessage());
  };

  const handleFetchFriends = () => {
    dispatch(fetchFriends());
  };

  const handleChange = (evt) => {
    setTextValue(evt.target.value);
    changeField(evt.target.value, name);
  };

  return (
    <div className="StepTextarea">
      <form>
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
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <SimpleButton textContent={buttonContent} onClick={handleClick} />
      </form>
    </div>
  );
};

StepTextarea.propTypes = {
  inputValue: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  placeholderContent: PropTypes.string,
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default StepTextarea;
