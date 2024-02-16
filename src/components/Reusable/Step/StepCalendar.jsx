import React, { useState } from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import { Datepicker } from '@mobiscroll/react';
import SimpleButton from '../SimpleButton/SimpleButton';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { useDispatch } from 'react-redux';
import {
  handleStepNext,
  setEndDate,
  setStartDate,
} from '../../../actions/trip';

// Functional component : popup with input fields and a close button
const StepCalendar = ({ buttonContent, labelContent }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleStepNext());
  };

  const handleCalendarDates = (event) => {
    const selectedDates = event.value.map((date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    });
    dispatch(setStartDate(selectedDates[0]));
    dispatch(setEndDate(selectedDates[1]));
  };

  return (
    <div className="StepCalendar">
      <div className="LabelInput">
        <p>{labelContent}</p>
        <Datepicker
          select="range"
          display="inline"
          onChange={handleCalendarDates}
        />
      </div>
      <SimpleButton textContent={buttonContent} onClick={handleClick} />
    </div>
  );
};

StepCalendar.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
};

export default StepCalendar;
