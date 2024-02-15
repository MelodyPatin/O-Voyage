import React from 'react';
import { useMediaQuery } from '@mui/material';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import ActivityCard from '../../../Reusable/ActivityCard/ActivityCard';
import IconButton from '../../../Reusable/IconButton/IconButton';
import './Activities.scss';

const Activities = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

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
          <IconButton textContent="Faire une proposition" icon="add" />
        </div>
      )}
    </div>
  );
};

export default Activities;