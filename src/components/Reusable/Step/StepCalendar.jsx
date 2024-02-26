import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './Steps.scss';
import { Datepicker } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

import SimpleButton from '../Buttons/SimpleButton';

import {
  handleStepNext,
  setEndDate,
  setStartDate,
} from '../../../actions/trip';
import { clearErrorMessage, setErrorMessage } from '../../../actions/user';

const StepCalendar = ({ buttonContent, labelContent }) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const [selectedDates, setSelectedDates] = useState([]);

  // Handle click event for the "Next" button
  const handleClick = () => {
    if (selectedDates.length !== 2) {
      // Display an error message if the user hasn't selected both start and end dates
      dispatch(
        setErrorMessage(
          'Veuillez sélectionner une date de début et une date de fin.'
        )
      );
      return; // Stop the function if not all dates are selected
    }

    // Move to the next step in the trip creation process
    dispatch(handleStepNext());
    // Clear any previous error messages
    dispatch(clearErrorMessage());
  };

  // Handle changes in the selected dates on the calendar
  const handleCalendarDates = (event) => {
    // Format the selected dates and update the state and Redux store
    const dates = event.value.map((date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    });
    setSelectedDates(dates);
    dispatch(setStartDate(dates[0]));
    dispatch(setEndDate(dates[1]));
  };

  return (
    <div className="StepCalendar">
      {/* Display the label and the Datepicker component for selecting date range */}
      <div className="LabelInput">
        <p>{labelContent}</p>
        <Datepicker
          select="range"
          display="inline"
          onChange={handleCalendarDates}
        />
      </div>

      {/* Display error message if any */}
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      <SimpleButton textContent={buttonContent} onClick={handleClick} />
    </div>
  );
};

StepCalendar.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
};

export default StepCalendar;
