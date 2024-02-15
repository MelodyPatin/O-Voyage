import React from 'react';
import PropTypes from 'prop-types';
import './PresentationCard.scss';
import Avatar from '../../../Reusable/Avatar/Avatar';

const PresentationCard = ({ firstname, presentation, picture }) => {
  return (
    <div className="presentationCard">
      {/* Avatar component for the team members */}
      <Avatar className="avatar" />
      {/* Member's name */}
      <h3>{firstname}</h3>
      {/* Member's short presentation */}
      <p>{presentation}</p>
    </div>
  );
};

PresentationCard.propTypes = {
  firstname: PropTypes.string.isRequired,
  presentation: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default PresentationCard;
