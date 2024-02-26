import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import './TravelersList.scss';

import User from '../../../../Reusable/User/User';
import IconButton from '../../../../Reusable/Buttons/IconButton';
import ReturnTitle from '../../../../Reusable/ReturnTitle/ReturnTitle';

const TravelersList = () => {
  // Get travelers data from Redux state
  const travelers = useSelector((state) => state.trip.travelers);

  // Get tripId from URL params
  const { tripId } = useParams();

  return (
    <div className="TravelersList">
      {/* Title for the list  */}
      <ReturnTitle textContent="Les voyageurs" />
      {/* List of users */}
      <ul>
        {travelers.map((traveler) => (
          <li key={traveler.id}>
            <User user={traveler} />
          </li>
        ))}
      </ul>
      <Link to={`/trip/${tripId}/addtravelers`}>
        <IconButton icon="plus" textContent="Ajouter un voyageur" />
      </Link>
    </div>
  );
};

export default TravelersList;
