import { React, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HeaderConnected from '../../../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../../../Reusable/TravelsMenu/TravelsMenu';
import NavBarMobile from '../../../../Reusable/NavBarMobile/NavBarMobile';
import NavBarHeader from '../../../../Reusable/NavBarHeader/NavBarHeader';
import '../../Travel.scss';
import GeneralInfos from '../../Details/Components/GeneralInfos';
import Activities from '../Activities/Activities';
import TravelersList from '../../Travelers/Components/TravelersList';
import { fetchTravelers } from '../../../../../actions/trip';
import FilterList from './Components/FilterList';

const Filters = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="travelDetails">
      {!isMobile ? (
        <>
          <NavBarHeader />
          <TravelsMenu />
          <div className="containerFlex">
            <aside className="aside">
              <FilterList />
            </aside>
            <Activities />
          </div>
        </>
      ) : (
        <>
          <HeaderConnected />
          <FilterList />
        </>
      )}
    </div>
  );
};

export default Filters;
