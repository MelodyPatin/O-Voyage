import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './ReturnTitle.scss';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import {
  clearErrorMessage,
  handleModificationStatus,
} from '../../../actions/user';

const ReturnTitle = ({ textContent }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Dispatch actions to clear error messages and handle modification status
  const handleGoBack = () => {
    dispatch(clearErrorMessage());
    dispatch(handleModificationStatus());
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className="ReturnTitle">
      <ArrowLeftIcon className="arrowIcon" onClick={handleGoBack} />
      {/* Icon for going back to the previous page */}
      <h3>{textContent}</h3>
    </div>
  );
};

ReturnTitle.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default ReturnTitle;
