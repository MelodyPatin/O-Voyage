import React from 'react';
import './ReturnTitle.scss';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { handleStepBack } from '../../../actions/trip';
import { clearErrorMessage, handleModificationStatus } from '../../../actions/user';

const ReturnTitleStep = ({ textContent }) => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(handleStepBack());
    dispatch(clearErrorMessage());
    dispatch(handleModificationStatus());
  };

  return (
    <div className="ReturnTitle">
      <ArrowLeftIcon className="arrowIcon" onClick={handleGoBack} />
      {/* Icone pour revenir à la page précédente */}
      <h3>{textContent}</h3>
    </div>
  );
};

ReturnTitleStep.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default ReturnTitleStep;
