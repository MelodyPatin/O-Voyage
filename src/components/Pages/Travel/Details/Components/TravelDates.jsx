import React from 'react';
import { useSelector } from 'react-redux';

const TravelDates = () => {
  const currentTrip = useSelector((state) => state.trip.trip);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(
      'fr-FR',
      options
    );
    return formattedDate;
  };

  const changeDateFormat = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = ('0' + (dateObject.getMonth() + 1)).slice(-2); // Ajoute un zéro devant si nécessaire
    const day = ('0' + dateObject.getDate()).slice(-2); // Ajoute un zéro devant si nécessaire
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="travelDates">
      {formatDate(changeDateFormat(currentTrip.startDate))} - {formatDate(changeDateFormat(currentTrip.endDate))}
    </div>
  );
};

export default TravelDates;
