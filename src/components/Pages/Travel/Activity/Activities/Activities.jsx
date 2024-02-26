import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';
import ActivityCard from './Components/ActivityCard';
import IconButton from '../../../../Reusable/Buttons/IconButton';
import './Activities.scss';
import { fetchTripActivities } from '../../../../../actions/activity';

const Activities = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activity.activities);
  const { tripId } = useParams();

  const isMobile = useMediaQuery('(max-width: 1024px)');

  // Fetch trip activities on component mount
  useEffect(() => {
    dispatch(fetchTripActivities(tripId));
  }, [dispatch, tripId]);

  // Sort activities by score in descending order
  const sortedActivities = activities.slice().sort((a, b) => b.score - a.score);

  // Render activities based on the number of activities
  const renderActivities = () => {
    if (sortedActivities.length === 1) {
      // Display for a single activity
      return (
        <div className="singleActivity">
          <ActivityCard activity={sortedActivities[0]} />
        </div>
      );
    }
    // Display for multiple activities
    return sortedActivities.map((activity) => (
      <div className="activity" key={activity.id}>
        <ActivityCard activity={activity} />
      </div>
    ));
  };

  return (
    <div className="activities">
      {/* Filter button (hidden for mobile view) */}
      {/* {!isMobile && (
        <Link to={`/trip/${tripId}/filters`}>
          <div className="filterButton">
            <SimpleButton textContent="Filtrer" />
          </div>
        </Link>
      )} */}

      {/* Container for activity list */}
      <div className="sliderContainer">
        <div className="activityList">{renderActivities()}</div>
      </div>

      {/* Suggestion button (hidden for mobile view) */}
      {!isMobile && (
        <div className="suggestionButton">
          <Link to="/createactivity">
            <IconButton textContent="Faire une proposition" icon="add" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Activities;
