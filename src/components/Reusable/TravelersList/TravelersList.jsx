import React from 'react';
import './TravelersList.scss';
// import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import User from '../User/User';
import IconButton from '../IconButton/IconButton';
import ReturnTitle from '../ReturnTitle/ReturnTitle';

const TravelersList = ({}) => {
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

TravelersList.propTypes = {};

export default TravelersList;
