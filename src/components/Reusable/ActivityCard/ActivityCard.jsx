import React from 'react';
import './ActivityCard.scss';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import SimpleButton from '../SimpleButton/SimpleButton';
import Selector from './Selector';

const ActivityCard = ({}) => {
  const isLiked = true;

  return (
  <div className="ActivityCard culture">
    <div className="FlexGap">
      <p>#1</p>
      <Avatar />
    </div>
    <div className="title">
      <p>Parlement de Budapest</p>
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
)};

ActivityCard.propTypes = {};

export default ActivityCard;
