import React from 'react';
import PropTypes from 'prop-types';
import './Tag.scss';

const Tag = ({ text, color, isSelected, onClick }) => {
  // Dynamic styling based on the isSelected prop
  const tagStyle = {
    backgroundColor: isSelected ? color : 'transparent',
    borderColor: color,
    color: isSelected ? '#fff' : color,
  };

  return (
    // Container for the tag with dynamic styles and click event
    <div className="tag" style={tagStyle} onClick={onClick}>
      <p>{text}</p>
    </div>
  );
};

Tag.propTypes = {
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  isSelected: false,
  onClick: () => {},
};

export default Tag;
