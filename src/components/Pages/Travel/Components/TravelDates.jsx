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

  return (
    <div className="travelDates">
      {formatDate(currentTrip.startDate)} - {formatDate(currentTrip.endDate)}
    </div>
  );
};

export default TravelDates;
