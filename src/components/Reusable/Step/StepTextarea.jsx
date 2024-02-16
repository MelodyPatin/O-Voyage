import React from 'react';
import './Steps.scss';
import { Form, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SimpleButton from '../SimpleButton/SimpleButton';
import { useDispatch } from 'react-redux';
import { handleStepNext } from '../../../actions/trip';
import { fetchFriends } from '../../../actions/user';

// Functional component : popup with input fields and a close button
const StepTextarea = ({
  inputValue,
  changeField,
  placeholderContent,
  buttonContent,
  labelContent,
}) => {
  const dispatch = useDispatch();
  const name = 'tripDescription';

  const inputId = `field-${name}`;

  const handleClick = () => {
    dispatch(handleStepNext());
  };

  const handleFetchFriends = () => {
    dispatch(fetchFriends());
  }

  const handleChange = (evt) => {
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
              value={inputValue}
              name={name}
              type="text"
              onChange={handleChange}
              id={inputId}
            />
          </Form>
        </div>
        <SimpleButton
          textContent={buttonContent}
          onClick={() => {
            handleClick();
            handleFetchFriends();
          }}
        />
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
};

export default StepTextarea;
