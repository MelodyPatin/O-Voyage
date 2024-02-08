import React from 'react';
import './TravelCard.scss';

import PropTypes from 'prop-types';

const TravelCard = ({ title, countdown }) => {
  return (
    <div className="cardContainer">
      {/* Background image for the travel card */}
      <img
        className="cardPicture"
        src="https://www.larousse.fr/encyclopedie/data/images/1313802-La_tour_Eiffel.jpg"
        alt="Travel"
      />
      <div className="cardTitle">
        {/* Title of the travel */}
        <h3>{title}</h3>
        {/* Countdown of the days before the beginning of the travel */}
        <span>Départ dans {countdown} jours</span>
      </div>
    </div>
  );
};

TravelCard.propTypes = {
  title: PropTypes.string.isRequired,
  countdown: PropTypes.string, // Countdown is an optional string prop (no countdown for passed or current travels)
};

TravelCard.defaultProps = {
  countdown: '', // Default value for countdown is an empty string
};

export default TravelCard;
