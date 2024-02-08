import React from 'react';
import './ReturnTitle.scss';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ReturnTitle = ({ textContent }) => {

  return (
    <div className="ReturnTitle">
      <Icon name="arrow left" />
      <h3>{textContent}</h3>
    </div>
  );
};

ReturnTitle.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default ReturnTitle;
