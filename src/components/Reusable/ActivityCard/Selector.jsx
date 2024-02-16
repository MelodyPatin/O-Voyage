import React, { useState, useEffect } from 'react';
import { Select } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Selector = ({ date: propDate }) => {
  const currentTrip = useSelector((state) => state.trip.trip);
  const [selectedDay, setSelectedDay] = useState(propDate); // Initialisez avec la valeur de la prop directement

  useEffect(() => {
    // Set the default selected day when the date prop changes
    setSelectedDay(propDate || null);
  }, [propDate]);

  const formatDate = (dateString) => {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      'fr-FR',
      options
    );
    return formattedDate;
  };

  // Function to generate an array of date options between startDate and endDate
  const generateDateOptions = () => {
    const startDate = new Date(currentTrip.startDate);
    const endDate = new Date(currentTrip.endDate);
    const dateOptions = [];

    for (
      let date = startDate;
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      const formattedDate = formatDate(date);
      dateOptions.push({
        key: formattedDate,
        value: formattedDate,
        text: formattedDate,
      });
    }

    return dateOptions;
  };

  const dayOptions = generateDateOptions();

  const formattedSelectedDay = formatDate(selectedDay);

  return (
    <Select
      placeholder="Sélectionner un jour"
      options={dayOptions}
      className="custom-select"
      value={formattedSelectedDay}
      onChange={(event, { value }) => {
        setSelectedDay(value);
      }}
    />
  );
};

Selector.propTypes = {
  date: PropTypes.string, // Assurez-vous d'ajuster le type selon vos besoins
};

Selector.defaultProps = {
  date: null, // ou la valeur par défaut que vous préférez
};

export default Selector;
