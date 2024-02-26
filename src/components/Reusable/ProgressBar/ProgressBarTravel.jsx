import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.scss';

const ProgressBarTravel = ({ step }) => {
  // Calculate the width in percentage based on the current step
  const calculateWidth = (step) => {
    switch (step) {
      case 1:
        return '16.67%';
      case 2:
        return '33.33%';
      case 3:
        return '50%';
      case 4:
        return '66.67%';
      case 5:
        return '83.33%';
      case 6:
        return '100%';
      default:
        return '0%';
    }
  };

  return (
    <div className="ProgressBar" style={{ width: calculateWidth(step) }} />
  );
};

ProgressBarTravel.propTypes = {
  step: PropTypes.number,
};

export default ProgressBarTravel;
