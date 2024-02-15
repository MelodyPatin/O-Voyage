import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const TravelDates = ({ DepartureDate, ReturnDate }) => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const trips = useSelector((state) => state.trip.myTrips);
  const currentTrip = trips.find((trip) => trip.id === parseInt(id, 10));

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('fr-FR', options);
    return formattedDate;
  }

  return (
    <div className="travelDates">
          {formatDate(currentTrip.startDate)} - {formatDate(currentTrip.endDate)}
    </div>
  );
};

TravelDates.propTypes = {
  DepartureDate: PropTypes.string.isRequired,
  ReturnDate: PropTypes.string.isRequired,
};

export default TravelDates;
