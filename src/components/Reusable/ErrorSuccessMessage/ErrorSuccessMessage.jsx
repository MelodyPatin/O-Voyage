import React from 'react';
import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';

import './ErrorSuccessMessage.scss';

const ErrorSuccessMessage = ({ type }) => {
  const styles = () => {
    if (type === 'success') {
      return 'success';
    }
    return 'error';
  };

  const message = () => {
    if (type === 'success') {
      return 'success';
    }
    return 'error';
  };

  return (
    <div className={`message-container ${styles()}`}>
      <XCircleIcon className="icon" />
      <p>{message()}</p>
    </div>
  );
};

ErrorSuccessMessage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ErrorSuccessMessage;
