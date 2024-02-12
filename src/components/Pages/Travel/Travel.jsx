import React from 'react';
import PropTypes from 'prop-types';
import HeaderConnected from '../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../Reusable/TravelsMenu/TravelsMenu';
import NavBarMobile from '../../Reusable/NavBarMobile/NavBarMobile';
import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import './Travel.scss';
import GeneralInfos from './Components/GeneralInfos';
import Activities from './Components/Activities';
import Actions from './Components/Actions';
import TravelersList from '../../Reusable/TravelersList/TravelersList';
import ActivityResume from '../ActivityResume/ActivityResume';

const Travel = ({ onDesktop, TravelDetail, Travelers, Activity }) => {
  return (
    <div className="travelDetails">
      {onDesktop ? (
        <>
          <NavBarHeader isLogged onDesktop />
          <TravelsMenu />
          <div className="containerFlex">
            <aside className="aside">
              {TravelDetail && (
                <>
                  <GeneralInfos />
                  <Actions onDesktop />
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
          {TravelDetail && (
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

Travel.propTypes = {
  onDesktop: PropTypes.bool,
  TravelDetail: PropTypes.bool,
  Activity: PropTypes.bool,
  Travelers: PropTypes.bool,
};

export default Travel;
