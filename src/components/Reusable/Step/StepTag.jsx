import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../SimpleButton/SimpleButton';
import Tag from '../Tag/Tag';

// Functional component : popup with input fields and a close button
const StepTag = ({
  buttonContent,
  placeholderContent,
  labelContent,
  valueContent,
}) => {
  return (
    <div className="StepTag">
      <div className="LabelInput">
        <p>{labelContent}</p>
        <div className="tags">
          <Tag className="tag" text="Restaurant" category="restaurant" />
          <Tag className="tag" text="Bar" category="pub" />
          <Tag className="tag" text="Visite culturelle" category="culture" />
          <Tag className="tag" text="Activité" category="activity" />
        </div>
      </div>
      <SimpleButton textContent={buttonContent} />
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
