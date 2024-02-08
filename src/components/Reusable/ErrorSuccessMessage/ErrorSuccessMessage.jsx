import React from 'react';
import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';

import './ErrorSuccessMessage.scss';

// Component displaying a different message based on weither the action was successful or not
const ErrorSuccessMessage = ({ type }) => {
  // Determine the CSS class based on the message type (success or error)
  const styles = () => {
    if (type === 'success') {
      return 'success';
    }
    return 'error';
  };

  // Determine the message text based on the message type
  const message = () => {
    if (type === 'success') {
      return 'success';
    }
    return 'error';
  };

  return (
    // Display the message container with his styling based on the type
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
