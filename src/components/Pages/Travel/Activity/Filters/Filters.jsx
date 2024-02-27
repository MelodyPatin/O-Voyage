import { React } from 'react';
import { useMediaQuery } from '@mui/material';

import '../../Travel.scss';

import TravelsMenu from '../../../../Reusable/TravelsMenu/TravelsMenu';
import NavBarHeader from '../../../../Reusable/NavBarHeader/NavBarHeader';
import Activities from '../Activities/Activities';
import FilterList from './Components/FilterList';

const Filters = () => {
  // Using the useMediaQuery hook to detect if the screen width is less than 1024px
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="travelDetails">
      {/* If the screen is not mobile */}
      {!isMobile ? (
        <>
          <NavBarHeader />
          <TravelsMenu />
          {/* Flexible container with a filter sidebar and the activities list */}
          <div className="containerFlex">
            <aside className="aside">
              <FilterList />
            </aside>
            <Activities />
          </div>
        </>
      ) : (
        <>
          <NavBarHeader />
          <FilterList />
        </>
      )}
    </div>
  );
};

export default Filters;
