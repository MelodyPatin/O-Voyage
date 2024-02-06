import React from 'react';
import './ActivityCard.scss';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import SimpleButton from '../SimpleButton/SimpleButton';

const ActivityCard = ({  }) => (
  <div className="ActivityCard">
    <div className="FlexGap">
      <p>#1</p>
      <Avatar />
    </div>
    <p>Parlement de Budapest</p>
    <div className="FlexColumn">
      <p>Selecteur</p>
      <SimpleButton textContent='En savoir plus' />
    </div>
    <div className="hearth">
      <p>icon coeur1</p>
      <p>icon coeur2</p>
      <p>icon coeur3</p>
    </div>
  </div>
);

ActivityCard.propTypes = {
};

export default ActivityCard;