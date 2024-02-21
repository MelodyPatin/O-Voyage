import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../Buttons/SimpleButton';
import Tag from '../Tag/Tag';
import { useDispatch } from 'react-redux';
import { submitCreateActivity } from '../../../actions/activity';

// Functional component : popup with input fields and a close button
const StepTag = ({
  buttonContent,
  placeholderContent,
  labelContent,
  valueContent,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(submitCreateActivity());
  };

  return (
    <div className="StepTag">
      <div className="LabelInput">
        <p>{labelContent}</p>
        <div className="tags">
          <Tag className="tag" text="Restaurant" category="restaurant" id={1} />
          <Tag className="tag" text="Activité" category="activity" id={4} />
          <Tag className="tag" text="Bar" category="pub" id={2} />
          <Tag
            className="tag"
            text="Visite culturelle"
            category="culture"
            id={3}
          />
        </div>
      </div>
      <SimpleButton
        textContent={buttonContent}
        onClick={handleClick}
        type="button"
      />
    </div>
  );
};

StepTag.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  placeholderContent: PropTypes.string,
  valueContent: PropTypes.string,
};

export default StepTag;
