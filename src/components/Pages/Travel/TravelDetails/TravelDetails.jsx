import React from 'react';
import PropTypes from 'prop-types';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';
import NavBarMobile from '../../../Reusable/NavBarMobile/NavBarMobile';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import './TravelDetails.scss';
import GeneralInfos from './GeneralInfos';
import Activities from './Activities';
import Actions from './Actions';
import TravelersList from '../../../Reusable/TravelersList/TravelersList';
import ActivityResume from '../../ActivityResume/ActivityResume';

const TravelDetails = ({ onDesktop, Travel, Travelers, Activity }) => {
  return (
    <div className="travelDetails">
      {onDesktop ? (
        <>
          <NavBarHeader isLogged onDesktop />
          <TravelsMenu />
          <div className="containerFlex">
            <aside className="aside">
              {Travel && (
                <>
                  <GeneralInfos />
                  <Actions />
                </>
              )}
              {Travelers && <TravelersList />}
              {Activity && <ActivityResume onDesktop
number='1' activityTitle='Parlement de Budapest' address='coucou' price='0' openTime='10h' url='site' description='yes' activityCategory='pub' />}
            </aside>
            <Activities onDesktop />
          </div>
        </>
      ) : (
        <>
          <HeaderConnected onDesktop={false} />
          <TravelsMenu />
          <GeneralInfos />
          {Travel && (
            <>
              <Activities />
              <Actions />
            </>
          )}
          {Travelers && <TravelersList />}
          <NavBarMobile />
        </>
      )}
    </div>
  );
};

TravelDetails.propTypes = {
  onDesktop: PropTypes.bool,
  Travel: PropTypes.bool,
  Activity: PropTypes.bool,
  Travelers: PropTypes.bool,
};

export default TravelDetails;
