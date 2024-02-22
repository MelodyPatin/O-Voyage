import React, { useState, useEffect } from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import { Datepicker } from '@mobiscroll/react';
import SimpleButton from '../Buttons/SimpleButton';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { useDispatch, useSelector } from 'react-redux';
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

  const handleClick = () => {
    if (selectedDates.length !== 2) {
      dispatch(
        setErrorMessage(
          'Veuillez sélectionner une date de début et une date de fin.'
        )
      );
      return; // Arrêter la suite si aucune date n'est sélectionnée
    }

    dispatch(handleStepNext());
    dispatch(clearErrorMessage());
  };

  const handleCalendarDates = (event) => {
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
      <div className="LabelInput">
        <p>{labelContent}</p>
        <Datepicker
          select="range"
          display="inline"
          onChange={handleCalendarDates}
        />
      </div>
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
