import React from 'react';
import { Select } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

const Selector = () => {
  const currentTrip = useSelector((state) => state.trip.trip);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' };
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
        text: formattedDate, // Utilisez la date formatée directement
      });
    }

    return dateOptions;
  };

  const dayOptions = generateDateOptions();

  return (
    <Select
      placeholder="Sélectionner un jour"
      options={dayOptions}
      className="custom-select"
    />
  );
};

export default Selector;
