import React from 'react';
import './ActivityCard.scss';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import SimpleButton from '../SimpleButton/SimpleButton';
import Selector from './Selector';

const ActivityCard = ({ activityTitle }) => {
  // Check if the activity is liked; assuming a constant value for the example.
  const isLiked = true;
  let shortenedTitle = activityTitle.substring(0, 35);

  // Shorten the activity title to 35 characters adding '...' if necessary.
  if (activityTitle.length > 35) {
    shortenedTitle += '...';
  }

  return (
    <div className="ActivityCard culture">
      <div className="FlexGap">
        {/* Display rank and Avatar in a flex container */}
        <p>#1</p>
        <Avatar />
      </div>
      {/* Display the shortened activity title */}
      <div className="title">
        <p>{shortenedTitle}</p>{' '}
      </div>
      {/* Display Selector and a button in a flex column */}
      <div className="FlexColumn">
        <Selector />
        <SimpleButton textContent="En savoir plus" />
      </div>
      {/* Display hearts based on whether the activity is liked, and to which amount */}
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
