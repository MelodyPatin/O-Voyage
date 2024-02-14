import React from 'react';
import './ReturnTitle.scss';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';

const ReturnTitle = ({ textContent, avatar }) => {
  const navigate = useNavigate();

  let displayText = textContent; // Initial value is the provided textContent

  // If an avatar is displayed and the text exceeds 17 characters, truncate it
  if (avatar && textContent.length > 17) {
    displayText = `${textContent.slice(0, 17)}...`;
  }

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className="ReturnTitle">
      <ArrowLeftIcon className="arrowIcon" onClick={handleGoBack} />
      {/* Icone pour revenir à la page précédente */}
      <h3>{displayText}</h3>
      {avatar && <Avatar className="avatar" />}{' '}
      {/* Afficher l'Avatar si la propriété avatar est vraie */}
    </div>
  );
};

ReturnTitle.propTypes = {
  textContent: PropTypes.string.isRequired,
  avatar: PropTypes.bool,
};

export default ReturnTitle;
