import React from 'react';
import PropTypes from 'prop-types';
import './Tag.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedTag, toggleTagSelected } from '../../../actions/activity';

const Tag = ({ text, category, id }) => {
  let tagClassName;
  if (category === 'tag') {
    tagClassName = text.toLowerCase().replace(/\s/g, '-');
  } else {
    tagClassName = category.toLowerCase();
  }
  const tagIsSelected = useSelector((state) => state.activity[`${category}Tag`]);
  const dispatch = useDispatch();

  const handleTagClick = () => {
    const categoryTag = category + 'Tag';
    // Dispatch de l'action toggleTagIsSelected avec le texte du tag comme paramètre
    dispatch(toggleTagSelected(categoryTag));
  };

  return (
    <div className={`tag ${tagClassName} ${tagIsSelected ? 'selected' : ''}`} onClick={handleTagClick}>
      <p>{text}</p>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Tag;
