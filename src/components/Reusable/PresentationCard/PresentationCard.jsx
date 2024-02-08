import React from 'react';
import './PresentationCard.scss';
import Avatar from '../Avatar/Avatar';

const PresentationCard = () => {
  return (
    <div className="presentationCard">
      {/* Avatar component for the team members */}
      <Avatar className="avatar" />
      {/* Member's name */}
      <h3>Le A</h3>
      {/* Member's short presentation */}
      <p>
        Alias Le Blaireau pour les intimes. Développeur back et super Scrum
        Master il a toujours le mot pour rire et remonter le moral des troupes!
      </p>
    </div>
  );
};

export default PresentationCard;
