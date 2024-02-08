import React from 'react';
import './TravelersList.scss';
// import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import User from '../User/User';
import IconButton from '../IconButton/IconButton';

const TravelersList = ({}) => {
  return (
    <div className="TravelersList">
      {/* Title for the list  // TODO mettre en h3? */}
      <p>Les voyageurs</p>
      {/* List of users */}
      <User firstName="Toto" />
      <User firstName="Toto" />
      <User firstName="Toto" />
      <User firstName="Toto" />
      <User firstName="Toto" />
      <IconButton icon="plus" textContent="Ajouter un voyageur" />
    </div>
  );
};

TravelersList.propTypes = {};

export default TravelersList;
