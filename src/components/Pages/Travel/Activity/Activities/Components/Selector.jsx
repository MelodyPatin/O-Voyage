import React from 'react';
import { Select } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { handleActivityDate, updateActivityDate } from '../../../../../../actions/activity';

const Selector = ({ date: propDate, activityId }) => {
  const dispatch = useDispatch();

  const currentTrip = useSelector((state) => state.trip.trip);

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

  // Ensure propDate is not null or undefined before calling split
  const selectedValue = propDate
    ? dayOptions.find(option => option.value.startsWith(propDate.split('T')[0]))?.value
    : null;

  return (
    <Select
      placeholder="Sélectionner un jour"
      options={dayOptions}
      className="custom-select"
      value={selectedValue || undefined} // Ensure the value is undefined if selectedValue is null, for compatibility
      onChange={(e, { value }) => {
        dispatch(updateActivityDate(activityId, value));
        dispatch(handleActivityDate(activityId, value));
      }}
    />
  );
};

Selector.propTypes = {
  date: PropTypes.string,
  activityId: PropTypes.number.isRequired,
};

Selector.defaultProps = {
  date: '',
};

export default Selector;
