import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from 'semantic-ui-react';

import './ActivityCard.scss';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import SimpleButton from '../SimpleButton/SimpleButton';
import Selector from './Selector';
import AvatarFriend from '../Avatar/AvatarFriends';
import { fetchActivityLikes } from '../../../actions/activity';

const ActivityCard = ({ activity }) => {
  const dispatch = useDispatch();
  const { tripId } = useParams();

  // Utilisez le sélecteur pour obtenir les likes par activité à partir du state
  const likesByActivity = useSelector(
    (state) => state.activity.likesByActivity
  );

  // Vérifiez si l'activité a un like dans le state
  const userVote =
    likesByActivity[activity.id] !== undefined
      ? likesByActivity[activity.id]
      : 0;

  useEffect(() => {
    // Dispatch l'action pour récupérer les likes de l'activité
    dispatch(fetchActivityLikes(activity.id));
  }, [dispatch, activity.id, tripId]);

  // Raccourcir le titre de l'activité
  const activityTitle = activity.name;
  let shortenedTitle = activityTitle.substring(0, 35);

  // Shorten the activity title to 35 characters adding '...' if necessary.
  if (activityTitle.length > 35) {
    shortenedTitle += '...';
  }

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
        <Link to={`/trip/${tripId}/activity/${activity.id}`}>
          <SimpleButton textContent="En savoir plus" />
        </Link>
      </div>
      {/* Display hearts based on whether the activity is liked, and to which amount */}
      <div className="hearth">
        <Rating
          icon="heart"
          defaultRating={userVote}
          maxRating={3}
          size="massive"
        />
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
