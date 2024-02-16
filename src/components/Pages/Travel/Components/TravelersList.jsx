import React from 'react';
import './TravelersList.scss';
import { useSelector } from 'react-redux';
import User from '../../../Reusable/User/User';
import IconButton from '../../../Reusable/IconButton/IconButton';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';

const TravelersList = () => {
  const travelers = useSelector((state) => state.trip.travelers);

  return (
    <div className="TravelersList">
      {/* Title for the list  */}
      <ReturnTitle textContent="Les voyageurs" />
      {/* List of users */}
      <ul>
        {travelers.map((traveler) => (
          <li key={traveler.id}>
            <User firstName={traveler.firstname} />
          </li>
        ))}
      </ul>
      <IconButton icon="plus" textContent="Ajouter un voyageur" />
    </div>
  );
};

export default TravelersList;
