import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import './ActivityCard.scss';
import { Rating } from 'semantic-ui-react';

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
  const activityColor = activity.tags[0]?.color ?? 'defaultColor';

  // Function to handle the user's like on the activity
  const handleLike = async (e, { rating: clickedRating }) => {
    await setNewRating(clickedRating);
    dispatch(fetchTripActivities(tripId));
  };

  // Function to render the activity title with ellipsis for long titles
  const renderActivityTitle = () => {
    const activityTitle = activity.name;
    const shortenedTitle =
      activityTitle.length > 35
        ? `${activityTitle.substring(0, 35)}...`
        : activityTitle;

    return <p>{shortenedTitle}</p>;
  };

  // Dynamically determine the card color based on selectedTag color
  const cardStyle = {
    backgroundColor: `${activityColor}80`, // Background color with opacity
    borderColor: activityColor, // Border color same as the activity color
    borderWidth: '7px', // Border width
    borderStyle: 'solid', // Border style
  };

  // Dynamically determine the score element's border color
  const scoreStyle = {
    borderColor: activityColor, // Border color same as the activity color
  };

  return (
    <div className="ActivityCard" style={cardStyle}>
      <div className="FlexGap">
        <p className="score" style={scoreStyle}>
          {activity.score}
        </p>
        <AvatarFriend userAvatar={activity.creator.avatarURL} />
      </div>
      {/* Display the activity title */}
      <div className="title">
        {renderActivityTitle()}
      </div>
      {/* Display the date selector and link to details */}
      <div className="FlexColumn">
        <Selector date={activity.date} activityId={activity.id} />
        <Link to={`/trip/${tripId}/activity/${activity.id}`}>
          <SimpleButton textContent="En savoir plus" />
        </Link>
      </div>
      {/* Display the heart icon for liking the activity */}
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
