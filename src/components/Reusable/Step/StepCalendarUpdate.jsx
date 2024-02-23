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
import { clearErrorMessage } from '../../../actions/user';

const StepCalendarUpdate = ({
  buttonContent,
  labelContent,
  startDate,
  endDate,
}) => {
  const dispatch = useDispatch();
  const [selectedDates, setSelectedDates] = useState([startDate, endDate]);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  useEffect(() => {
    setSelectedDates([startDate, endDate]);
  }, [startDate, endDate]);

  const handleClick = () => {
    dispatch(handleStepNext());
    dispatch(clearErrorMessage());
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
          value={selectedDates}
        />
      </div>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      <SimpleButton textContent={buttonContent} onClick={handleClick} />
    </div>
  );
};

StepCalendarUpdate.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
};

StepCalendarUpdate.defaultProps = {
  startDate: '',
  endDate: '',
};

export default StepCalendarUpdate;
