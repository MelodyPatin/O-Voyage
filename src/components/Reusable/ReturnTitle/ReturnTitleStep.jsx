import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './ReturnTitle.scss';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import { handleStepBack } from '../../../actions/trip';
import {
  clearErrorMessage,
  handleModificationStatus,
} from '../../../actions/user';

const ReturnTitleStep = ({ textContent }) => {
  const dispatch = useDispatch();

  // Dispatch actions to clear error messages and handle modification status
  const handleGoBack = () => {
    dispatch(handleStepBack());
    dispatch(clearErrorMessage());
    dispatch(handleModificationStatus());
  };

  return (
    <div className="ReturnTitle">
      <ArrowLeftIcon className="arrowIcon" onClick={handleGoBack} />
      {/* Icon for going back to the previous step */}
      <h3>{textContent}</h3>
    </div>
  );
};

ReturnTitleStep.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default ReturnTitleStep;
