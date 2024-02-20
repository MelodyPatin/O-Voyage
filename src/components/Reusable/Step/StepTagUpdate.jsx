import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../SimpleButton/SimpleButton';
import Tag from '../Tag/Tag';
import { useDispatch } from 'react-redux';
import { submitCreateActivity, submitUpdateActivity } from '../../../actions/activity';
import { useParams } from 'react-router-dom';

// Functional component : popup with input fields and a close button
const StepTagUpdate = ({
  buttonContent,
  placeholderContent,
  labelContent,
  valueContent,
}) => {

  const dispatch = useDispatch();
  const { id } = useParams(); // Get the 'id' parameter from the URL

  const handleClick = () => {
    dispatch(submitUpdateActivity(id));
  };

  return (
    <div className="StepTag">
      <div className="LabelInput">
        <p>{labelContent}</p>
        <div className="tags">
          <Tag className="tag" text="Restaurant" category="restaurant" id={1} />
          <Tag className="tag" text="Activité" category="activity" id={4} />
          <Tag className="tag" text="Bar" category="pub" id={2} />
          <Tag className="tag" text="Visite culturelle" category="culture" id={3} />
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

StepTagUpdate.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  placeholderContent: PropTypes.string,
  valueContent: PropTypes.string,
};

export default StepTagUpdate;
