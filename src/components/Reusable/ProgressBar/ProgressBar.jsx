import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.scss';

const ProgressBar = ({ step }) => {
  // Calculer la largeur en pourcentage en fonction de l'étape
  const calculateWidth = (step) => {
    switch (step) {
      case 1:
        return '14%';
      case 2:
        return '28%';
      case 3:
        return '42%';
      case 4:
        return '56%';
      case 5:
        return '70%';
      case 6:
        return '84%';
      case 7:
        return '100%';
      default:
        return '0%';
    }
  };

  return (
    <div className="ProgressBar" style={{ width: calculateWidth(step) }}></div>
  );
};



ProgressBar.propTypes = {
  step: PropTypes.number,
};

export default ProgressBar;
