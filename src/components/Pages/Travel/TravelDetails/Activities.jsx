import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import ActivityCard from '../../../Reusable/ActivityCard/ActivityCard';
import IconButton from '../../../Reusable/IconButton/IconButton';

const Activities = () => {
  return (
    <div>
      <div className="filterButton">
        <SimpleButton textContent="Filtrer" />
      </div>
      <div className="sliderContainer">
        <div className="arrow">
          <ChevronLeftIcon />
        </div>
        <div className="activityList">
          <ActivityCard activityTitle="coucou" />
          <ActivityCard activityTitle="coucou" />
          <ActivityCard activityTitle="coucou" />
          <ActivityCard activityTitle="coucou" />
          <ActivityCard activityTitle="coucou" />
        </div>
        <div className="arrow">
          <ChevronRightIcon />
        </div>
      </div>
      <div className="suggestionButton">
        <IconButton textContent="Faire une proposition" icon="add" />
      </div>
    </div>
  );
};

export default Activities;