import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import ActivityCard from '../../../Reusable/ActivityCard/ActivityCard';
import IconButton from '../../../Reusable/IconButton/IconButton';
import './Activities.scss';
import ActivityAdd from '../../../Unique/TravelActivity/ActivityAddUpdate/ActivityAdd';

const Activities = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const [popupOpened, setPopupOpened] = useState(false);

  const openPopup = () => {
    setPopupOpened(true);
  };

  return (
    <div className="activities">
      {!isMobile && (
        <div className="filterButton">
          <SimpleButton textContent="Filtrer" />
        </div>
      )}
      <div className="sliderContainer">
        {!isMobile && (
          <div className="arrow">
            <ChevronLeftIcon />
          </div>
        )}
        <div className="activityList">
          <ActivityCard activityTitle="Parlement de Budapest" />
          <ActivityCard activityTitle="coucou" />
          <ActivityCard activityTitle="coucou" />
          <ActivityCard activityTitle="coucou" />
          <ActivityCard activityTitle="coucou" />
        </div>
        {!isMobile && (
          <div className="arrow">
            <ChevronRightIcon />
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="suggestionButton">
          <button onClick={openPopup} type="button">
            <IconButton textContent="Faire une proposition" icon="add" />
          </button>
        </div>
      )}
      {popupOpened && <ActivityAdd />}
    </div>
  );
};

export default Activities;
