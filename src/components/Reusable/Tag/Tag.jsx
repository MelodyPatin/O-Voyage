import React from 'react';
import PropTypes from 'prop-types';
import './Tag.scss';

const Tag = ({ text, category }) => {
  let tagClassName;
  // Convert text to a valid class name, replacing spaces with dashes
  if (category === 'tag') {
    tagClassName = text.toLowerCase().replace(/\s/g, '-');
  } else {
    tagClassName = category.toLowerCase();
  }
  const isSelected = true;

  return (
    // Render the Tag with appropriate class names based on text, category, and selection status
    <div className={`tag ${tagClassName} ${isSelected ? 'selected' : ''}`}>
      <p>{text}</p>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Tag;
