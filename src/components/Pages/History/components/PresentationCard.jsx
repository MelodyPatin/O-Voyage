import React from 'react';
import PropTypes from 'prop-types';
import './PresentationCard.scss';
import AvatarCreators from '../../../Reusable/Avatar/AvatarCreators';

const PresentationCard = ({ firstname, presentation, picture }) => {
  return (
    <div className="presentationCard">
      {/* Avatar component for the team members */}
      <AvatarCreators className="avatar" picture={picture} />
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
