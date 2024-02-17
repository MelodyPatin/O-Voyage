import React from 'react';
import { useSelector } from 'react-redux';
import './ActivityCard.scss';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, NavLink, useParams } from 'react-router-dom';
import SimpleButton from '../SimpleButton/SimpleButton';
import Selector from './Selector';
import AvatarFriend from '../Avatar/AvatarFriends';

const ActivityCard = ({ activity }) => {
  // Check if the activity is liked; assuming a constant value for the example.
  const isLiked = true;
  const activityTitle = activity.name;
  let shortenedTitle = activityTitle.substring(0, 35);

  // Shorten the activity title to 35 characters adding '...' if necessary.
  if (activityTitle.length > 35) {
    shortenedTitle += '...';
  }

  console.log(activity);

  let tag;

  switch (activity.tags[0].id) {
    case 1:
      tag = 'restaurant';
      break;
    case 2:
      tag = 'pub';
      break;
    case 3:
      tag = 'culture';
      break;
    case 4:
      tag = 'activity';
      break;
    // Add more cases if needed
    default:
      // Default case if none of the above conditions match
      tag = '';
      break;
  }

  const { id } = useParams();

  return (
    <div className={`ActivityCard ${tag}`}>
      <div className="FlexGap">
        {/* Display rank and Avatar in a flex container */}
        <p>{activity.score}</p>
        <AvatarFriend userAvatar={activity.creator.avatarURL} />
      </div>
      {/* Display the shortened activity title */}
      <div className="title">
        <p>{shortenedTitle}</p>
      </div>
      {/* Display Selector and a button in a flex column */}
      <div className="FlexColumn">
        <Selector date={activity.date} />
        <NavLink to={`/trip/${id}/activity/${activity.id}`}>
          <SimpleButton textContent="En savoir plus" />
        </NavLink>
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
  activity: PropTypes.shape({
    // Définissez les propriétés attendues de l'objet activity
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string,
    score: PropTypes.number.isRequired,
    city: PropTypes.shape.isRequired,
    creator: PropTypes.shape({
      avatarURL: PropTypes.string.isRequired,
    }).isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
    // ... autres propriétés ...
  }).isRequired,
};

export default ActivityCard;
