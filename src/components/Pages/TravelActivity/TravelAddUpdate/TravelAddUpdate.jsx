import React from 'react';
import './TravelAddUpdate.scss';
import PropTypes from 'prop-types';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import Step from '../../../Reusable/Step/Step';

const TravelAddUpdate = ({ contentReturnTitle }) => {
  return (
    <div className="TravelAddUpdate">
      <NavBarHeader isLogged={true} onDesktop={false} />
      <ReturnTitle textContent={contentReturnTitle} avatar={false} />
      <Step />
    </div>
  );
};

TravelAddUpdate.propTypes = {
  contentReturnTitle: PropTypes.string.isRequired,
};

export default TravelAddUpdate;
