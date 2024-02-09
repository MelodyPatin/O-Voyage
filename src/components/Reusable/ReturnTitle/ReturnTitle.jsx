import React from 'react';
import './ReturnTitle.scss';
import { Icon } from 'semantic-ui-react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';

const ReturnTitle = ({ textContent, avatar }) => {
  // Check if the text exceeds 17 characters
  const displayText =
    textContent.length > 17 ? `${textContent.slice(0, 17)}...` : textContent;

  return (
    <div className="ReturnTitle">
      <ArrowLeftIcon className="arrowIcon" />
      {/* Icon for going back to the previous page */}
      <h3>{displayText}</h3>
      {avatar && <Avatar className="avatar" />}{' '}
      {/* Display Avatar if avatar prop is true */}
    </div>
  );
};

ReturnTitle.propTypes = {
  textContent: PropTypes.string.isRequired,
  avatar: PropTypes.bool,
};

export default ReturnTitle;
