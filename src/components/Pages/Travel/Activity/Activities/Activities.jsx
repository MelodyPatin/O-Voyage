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

  useEffect(() => {
    dispatch(fetchTripActivities(tripId));
  }, [dispatch, tripId]);

  const sortedActivities = activities.slice().sort((a, b) => b.score - a.score);

  // Gérer l'affichage selon le nombre d'activités
  const renderActivities = () => {
    if (sortedActivities.length === 1) {
      // Cas où il y a une seule activité
      return (
        <div className="singleActivity">
          <ActivityCard activity={sortedActivities[0]} />
          {/* Vous pouvez ajouter ici un message ou un traitement spécial pour une seule activité */}
        </div>
      );
    }
    // Cas où il y a plusieurs activités
    return sortedActivities.map((activity) => (
      <div className="activity" key={activity.id}>
        <ActivityCard activity={activity} />
      </div>
    ));
  };

  return (
    <div className="activities">
      {/* {!isMobile && (
        <Link to={`/trip/${tripId}/filters`}>
          <div className="filterButton">
            <SimpleButton textContent="Filtrer" />
          </div>
        </Link>
      )} */}
      <div className="sliderContainer">
        <div className="activityList">{renderActivities()}</div>
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
