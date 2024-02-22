import React from 'react';
import './ReturnTitle.scss';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { clearErrorMessage, handleModificationStatus } from '../../../actions/user';

const ReturnTitle = ({ textContent }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(clearErrorMessage());
    dispatch(handleModificationStatus());
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className="ReturnTitle">
      <ArrowLeftIcon className="arrowIcon" onClick={handleGoBack} />
      {/* Icone pour revenir à la page précédente */}
      <h3>{textContent}</h3>
      {/* Afficher l'Avatar si la propriété avatar est vraie */}
    </div>
  );
};

ReturnTitle.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default ReturnTitle;
