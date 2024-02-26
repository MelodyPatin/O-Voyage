import React from 'react';
import { useSelector } from 'react-redux';

const TravelDates = () => {
  // Retrieve the current trip from the Redux store
  const currentTrip = useSelector((state) => state.trip.trip);

  // Function to format a date string to a localized date format
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(
      'fr-FR',
      options
    );
    return formattedDate;
  };

  // Function to change the date format to 'YYYY-MM-DD' for consistency
  const changeDateFormat = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = `0${dateObject.getMonth() + 1}`.slice(-2); // Add leading zero if necessary
    const day = `0${dateObject.getDate()}`.slice(-2); // Add leading zero if necessary
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="travelDates">
      {/* Display the formatted start and end dates of the current trip */}
      {formatDate(changeDateFormat(currentTrip.startDate))} -{' '}
      {formatDate(changeDateFormat(currentTrip.endDate))}
    </div>
  );
};

export default TravelDates;
