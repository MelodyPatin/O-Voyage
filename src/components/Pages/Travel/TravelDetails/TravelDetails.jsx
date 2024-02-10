import React from 'react';
import PropTypes from 'prop-types';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';
import ActivityCard from '../../../Reusable/ActivityCard/ActivityCard';
import IconButton from '../../../Reusable/IconButton/IconButton';
import NavBarMobile from '../../../Reusable/NavBarMobile/NavBarMobile';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import './TravelDetails.scss';
import GeneralInfos from './GeneralInfos';
import Activities from './Activities';
import Actions from './Actions';

const TravelDetails = ({ onDesktop }) => {
  return (
    <div className="travelDetails">
      {onDesktop ? (
        <>
          <NavBarHeader isLogged onDesktop />
          <TravelsMenu />
          <div className="containerFlex">
            <aside className="aside">
              <GeneralInfos />
              <Actions />
            </aside>
            <Activities onDesktop />
          </div>
        </>
      ) : (
        <>
          <HeaderConnected onDesktop={false} />
          <TravelsMenu />
          <GeneralInfos />
          <Activities />
          <Actions />
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

TravelDetails.propTypes = {
  onDesktop: PropTypes.bool,
};

export default TravelDetails;
