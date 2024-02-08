import React from 'react';
import './TravelCard.scss';

import PropTypes from 'prop-types';

const TravelCard = ({ title, countdown }) => {
  return (
    <div className="cardContainer">
      <img
        className="cardPicture"
        src="https://www.larousse.fr/encyclopedie/data/images/1313802-La_tour_Eiffel.jpg"
        alt="Travel"
      />
      <div className="cardTitle">
        <h3>{title}</h3>
        <span>{countdown}</span>
      </div>
    </div>
  );
};

TravelCard.propTypes = {
  title: PropTypes.string.isRequired,
  countdown: PropTypes.string,
};

TravelCard.defaultProps = {
  countdown: '',
};

export default TravelCard;
