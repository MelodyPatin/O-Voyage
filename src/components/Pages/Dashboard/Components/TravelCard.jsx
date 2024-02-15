import React from 'react';
import './TravelCard.scss';

import PropTypes from 'prop-types';

const TravelCard = ({ trip, countdown }) => {
  if (!trip) {
    return null;
  }
  const { name, startDate, backgroundPicture } = trip;

  return (
    <div className="cardContainer">
      {/* Background image for the travel card */}
      <img className="cardPicture" src={backgroundPicture} alt="Travel" />
      <div className="cardTitle">
        {/* Title of the travel */}
        <h3>{name}</h3>
        {/* Countdown of the days before the beginning of the travel */}
        {countdown && <span>Départ dans {countdown} jours</span>}
      </div>
    </div>
  );
};

TravelCard.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    backgroundPicture: PropTypes.string.isRequired,
  }).isRequired,
  countdown: PropTypes.string, // Countdown is an optional string prop (no countdown for passed or current travels)
};

TravelCard.defaultProps = {
  countdown: '', // Default value for countdown is an empty string
};

export default TravelCard;
