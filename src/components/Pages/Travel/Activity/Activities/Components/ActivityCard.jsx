import React from 'react';
import { Rating } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import './ActivityCard.scss';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import SimpleButton from '../../../../../Reusable/Buttons/SimpleButton';
import Selector from './Selector';
import AvatarFriend from '../../../../../Reusable/Avatar/AvatarFriends';
import {
  useActivityRating,
  useSetActivityRating,
} from '../../../../../../hooks/activity';
import { fetchTripActivities } from '../../../../../../actions/activity';

const ActivityCard = ({ activity }) => {
  const dispatch = useDispatch();
  const { tripId } = useParams();
  const [rating, isLoading] = useActivityRating(activity.id);
  const [newRating, setNewRating] = useSetActivityRating(activity.id);
  const activityColor = useSelector((state) => state.activity.selectedTag[0].color)

  const handleLike = async (e, { rating: clickedRating }) => {
    await setNewRating(clickedRating);
    dispatch(fetchTripActivities(tripId));
  };

  const activityTitle = activity.name;
  const shortenedTitle =
    activityTitle.length > 35
      ? `${activityTitle.substring(0, 35)}...`
      : activityTitle;

  // Dynamically determine the card color based on selectedTag color
  const cardStyle = {
    backgroundColor: `${activityColor}80`, // Background color with opacity
    borderColor: activityColor, // Border color same as the activity color
    borderWidth: '7px', // Border width
    borderStyle: 'solid', // Border style
  };

  return (
    <div className="ActivityCard" style={cardStyle}>
      <div className="FlexGap">
        <p className='score'>{activity.score}</p>
        <AvatarFriend userAvatar={activity.creator.avatarURL} />
      </div>
      <div className="title">
        <p>{shortenedTitle}</p>
      </div>
      <div className="FlexColumn">
        <Selector date={activity.date} activityId={activity.id} />
        <Link to={`/trip/${tripId}/activity/${activity.id}`}>
          <SimpleButton textContent="En savoir plus" />
        </Link>
      </div>
      <div className="hearth">
        {!isLoading && (
          <Rating
            onRate={handleLike}
            icon="heart"
            rating={newRating !== null ? newRating : rating}
            maxRating={3}
            size="massive"
          />
        )}
      </div>
    </div>
  );
};

ActivityCard.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string,
    score: PropTypes.number.isRequired,
    city: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    creator: PropTypes.shape({
      avatarURL: PropTypes.string.isRequired,
    }).isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired, // Add color prop type
      })
    ).isRequired,
  }).isRequired,
};

ActivityCard.defaultProps = {
  date: '',
};

export default ActivityCard;
