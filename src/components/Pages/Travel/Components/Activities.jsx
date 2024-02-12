import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import ActivityCard from '../../../Reusable/ActivityCard/ActivityCard';
import IconButton from '../../../Reusable/IconButton/IconButton';
import './Activities.scss';

const Activities = ({ onDesktop }) => {
  return (
    <div className="activities">
      {onDesktop && (
        <div className="filterButton">
          <SimpleButton textContent="Filtrer" />
        </div>
      )}
      <div className="sliderContainer">
        {onDesktop && (
          <div className="arrow">
            <ChevronLeftIcon />
          </div>
        )}
        <div className="activityList">
          <ActivityCard activityTitle="coucou" />
          <ActivityCard activityTitle="coucou" />
          <ActivityCard activityTitle="coucou" />
          <ActivityCard activityTitle="coucou" />
          <ActivityCard activityTitle="coucou" />
        </div>
        {onDesktop && (
          <div className="arrow">
            <ChevronRightIcon />
          </div>
        )}
      </div>
      {onDesktop && (
        <div className="suggestionButton">
          <IconButton textContent="Faire une proposition" icon="add" />
        </div>
      )}
    </div>
  );
};

Activities.propTypes = {
  onDesktop: PropTypes.bool,
};

export default Activities;