import React from 'react';
import { Select } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { handleActivityDate, updateActivityDate } from '../../../actions/activity';

const Selector = ({ date: propDate, activityId }) => {
  const dispatch = useDispatch();

  // Suppose your currentTrip comes from Redux or props
  const currentTrip = { startDate: '2024-04-25', endDate: '2024-04-30' }; // Example

  const formatDateDisplay = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatDateISO = (date) => {
    return new Date(date).toISOString();
  };

  const generateDateOptions = () => {
    let startDate = new Date(currentTrip.startDate);
    const endDate = new Date(currentTrip.endDate);
    const dateOptions = [];

    while (startDate <= endDate) {
      const dateValue = formatDateISO(startDate);
      const dateText = formatDateDisplay(startDate);
      dateOptions.push({ key: dateValue, value: dateValue, text: dateText });
      startDate = new Date(startDate.setDate(startDate.getDate() + 1));
    }

    return dateOptions;
  };

  const dayOptions = generateDateOptions();

  // Find the option that matches the propDate in ISO format
  const selectedValue = dayOptions.find(option => option.value.startsWith(propDate.split('T')[0]))?.value;

  return (
    <Select
      placeholder="Sélectionner un jour"
      options={dayOptions}
      className="custom-select"
      value={selectedValue}
      onChange={(e, { value }) => {
        // Here, the value is already in ISO format, ready to be used
        dispatch(updateActivityDate(activityId, value));
        dispatch(handleActivityDate(activityId, value));
      }}
    />
  );
};

Selector.propTypes = {
  date: PropTypes.string.isRequired,
  activityId: PropTypes.number.isRequired,
};

export default Selector;
