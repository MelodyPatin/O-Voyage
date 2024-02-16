import React from 'react';
import './ReturnTitle.scss';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import { useDispatch } from 'react-redux';
import { handleStepBack } from '../../../actions/trip';

const ReturnTitleStep = ({ textContent, avatar }) => {
  const dispatch = useDispatch();

  let displayText = textContent; // Initial value is the provided textContent

  // If an avatar is displayed and the text exceeds 17 characters, truncate it
  if (avatar && textContent.length > 17) {
    displayText = `${textContent.slice(0, 17)}...`;
  }

  const handleGoBack = () => {
    dispatch(handleStepBack());
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

ReturnTitleStep.propTypes = {
  textContent: PropTypes.string.isRequired,
  avatar: PropTypes.bool,
};

export default ReturnTitleStep;
