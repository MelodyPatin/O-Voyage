import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import ActivityCard from '../../../Reusable/ActivityCard/ActivityCard';
import IconButton from '../../../Reusable/IconButton/IconButton';
import './Activities.scss';
import { fetchTripActivities } from '../../../../actions/activity';

const Activities = () => {
  const { tripId } = useParams();
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activity.activities);

  const isMobile = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    dispatch(fetchTripActivities(tripId));
  }, [dispatch, tripId]);

  const sortedActivities = activities.slice().sort((a, b) => b.score - a.score);

  return (
    <div className="activities">
      {!isMobile && (
        <Link to={`/trip/${tripId}/filters`}>
          <div className="filterButton">
            <SimpleButton textContent="Filtrer" />
          </div>
        </Link>
      )}
      <div className="sliderContainer">
        <div className="activityList">
          {sortedActivities.map((activity) => (
            <div className="activity" key={activity.id}>
              <ActivityCard activity={activity} />
            </div>
          ))}
        </div>
      </div>
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
