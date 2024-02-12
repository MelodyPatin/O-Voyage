import React from 'react';
import PropTypes from 'prop-types';

const TravelDates = ({ DepartureDate, ReturnDate }) => {
  return (
    <div className="travelDates">
      {DepartureDate} - {ReturnDate}
    </div>
  );
};

TravelDates.propTypes = {
  DepartureDate: PropTypes.string.isRequired,
  ReturnDate: PropTypes.string.isRequired,
};

export default TravelDates;
