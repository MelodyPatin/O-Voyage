import React from 'react';
import './TravelersList.scss';
import User from '../../../Reusable/User/User';
import IconButton from '../../../Reusable/IconButton/IconButton';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';

const TravelersList = () => {
  return (
    <div className="TravelersList">
      {/* Title for the list  */}
      <ReturnTitle textContent="Les voyageurs" />
      {/* List of users */}
      <ul>
        <li>
          <User firstName="Toto" />
        </li>
        <li>
          <User firstName="Toto" />
        </li>
        <li>
          <User firstName="Toto" />
        </li>
        <li>
          <User firstName="Toto" />
        </li>
        <li>
          <User firstName="Toto" />
        </li>
      </ul>
      <IconButton icon="plus" textContent="Ajouter un voyageur" />
    </div>
  );
};

export default TravelersList;
