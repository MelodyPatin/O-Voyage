import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import './Steps.scss';

import SimpleButton from '../Buttons/SimpleButton';
import Tag from '../Tag/Tag';

import {
  fetchTags,
  submitUpdateActivity,
  updateSelectedTag,
} from '../../../actions/activity';
import { clearErrorMessage, setErrorMessage } from '../../../actions/user';
import { handleStepReset } from '../../../actions/trip';

const StepTagUpdate = ({
  buttonContent,
  placeholderContent,
  labelContent,
  valueContent,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activityId } = useParams(); // Get the activityId from the route parameters
  const [selectedTag, setSelectedTag] = useState(null); // Local state for the selected tag
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const tripId = useSelector((state) => state.trip.trip.id);

  // Fetch tags from the server when the component mounts
  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  // Click handler for the button to submit the updated activity with the selected tag
  const handleClick = () => {
    // Check if a tag is selected
    if (!selectedTag) {
      // Display an error message if no tag is selected
      dispatch(setErrorMessage('Veuillez sélectionner un tag.'));
      return; // Stop the progression if no tag is selected
    }

    // Submit the updated activity with the selected tag
    dispatch(submitUpdateActivity(activityId));
    // Clear any error messages
    dispatch(clearErrorMessage());
    // Reset the step state to the initial step
    dispatch(handleStepReset());
    // Navigate to the trip details page after the activity is updated
    navigate(`/trip/${tripId}`);
  };

  // Callback function to handle a tag click
  const handleTagClick = (tag) => {
    // Update the local state with the selected tag
    setSelectedTag(tag);
    // Dispatch an action to update the selected tag in the Redux store
    dispatch(updateSelectedTag(tag));
  };

  // Retrieve the tags from the Redux store
  const tags = useSelector((state) => state.activity.tags);

  return (
    <div className="StepTag">
      <div className="LabelInput">
        <p>{labelContent}</p>
        {/* Display tags with Tag components */}
        <div className="tags">
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              text={tag.name}
              color={tag.color}
              isSelected={selectedTag && selectedTag.id === tag.id}
              onClick={() => handleTagClick(tag)}
            />
          ))}
        </div>
      </div>
      {/* Display error message if present */}
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      <SimpleButton
        textContent={buttonContent}
        onClick={handleClick}
        type="button"
      />
    </div>
  );
};

StepTagUpdate.propTypes = {
  valueContent: PropTypes.string,
  placeholderContent: PropTypes.string,
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
};

StepTagUpdate.defaultProps = {
  valueContent: '',
  placeholderContent: '',
};

export default StepTagUpdate;
