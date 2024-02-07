import React from 'react';
import './ActivityCard.scss';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import SimpleButton from '../SimpleButton/SimpleButton';
import Selector from './Selector';

const ActivityCard = ({ activityTitle }) => {
  const isLiked = true;
  let shortenedTitle = activityTitle.substring(0, 28); // Extraire les 20 premiers caractères

  // Ajouter des points de suspension si activityTitle dépasse 20 caractères
  if (activityTitle.length > 28) {
    shortenedTitle += '...';
  }

  return (
    <div className="ActivityCard culture">
      <div className="FlexGap">
        <p>#1</p>
        <Avatar />
      </div>
      <div className="title">
        <p>{shortenedTitle}</p> {/* Afficher seulement les 20 premiers caractères */}
      </div>
      <div className="FlexColumn">
        <Selector />
        <SimpleButton textContent="En savoir plus" />
      </div>
      <div className="hearth">
        <Icon name={isLiked ? 'heart' : 'heart outline'} />
        <Icon name={isLiked ? 'heart' : 'heart outline'} />
        <Icon name={isLiked ? 'heart' : 'heart outline'} />
      </div>
    </div>
  );
};

ActivityCard.propTypes = {
  activityTitle: PropTypes.string.isRequired,
};

export default ActivityCard;
