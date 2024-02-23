import React, { useEffect, useState } from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../Buttons/SimpleButton';
import Tag from '../Tag/Tag';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTags,
  submitCreateActivity,
  updateSelectedTag,
} from '../../../actions/activity';
import { clearErrorMessage, setErrorMessage } from '../../../actions/user';
import { handleStepReset } from '../../../actions/trip';
import { useNavigate, useParams } from 'react-router-dom';

const StepTag = ({
  buttonContent,
  placeholderContent,
  labelContent,
  valueContent,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState(null);
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const tripId = useSelector((state) => state.trip.trip.id);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  const handleClick = () => {
    if (!selectedTag) {
      dispatch(setErrorMessage('Veuillez sélectionner un tag.'));
      return; // Arrêter la progression si aucune étiquette n'est sélectionnée
    }
    dispatch(submitCreateActivity());
    dispatch(clearErrorMessage());
    dispatch(handleStepReset());
    navigate(`/trip/${tripId}`);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    dispatch(updateSelectedTag(tag));
  };

  const tags = useSelector((state) => state.activity.tags);

  return (
    <div className="StepTag">
      <div className="LabelInput">
        <p>{labelContent}</p>
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
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      <SimpleButton
        textContent={buttonContent}
        onClick={handleClick}
        type="button"
      />
    </div>
  );
};

StepTag.propTypes = {
  valueContent: PropTypes.string,
  placeholderContent: PropTypes.string,
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
};

StepTag.defaultProps = {
  valueContent: '',
  placeholderContent: '',
};

export default StepTag;
