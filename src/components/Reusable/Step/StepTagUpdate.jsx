import React, { useEffect, useState } from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../Buttons/SimpleButton';
import Tag from '../Tag/Tag';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags, submitUpdateActivity, updateSelectedTag } from '../../../actions/activity';
import { useParams } from 'react-router-dom';
import { clearErrorMessage } from '../../../actions/user';

const StepTagUpdate = ({
  buttonContent,
  placeholderContent,
  labelContent,
  valueContent,
}) => {
  const dispatch = useDispatch();
  const { activityId } = useParams();
  const [selectedTag, setSelectedTag] = useState(null);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  const handleClick = () => {
    dispatch(submitUpdateActivity(activityId));
    dispatch(clearErrorMessage());
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

StepTagUpdate.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  placeholderContent: PropTypes.string,
  valueContent: PropTypes.string,
};

export default StepTagUpdate;
