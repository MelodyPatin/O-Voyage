import React from 'react';
import './ReturnTitle.scss';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';

const ReturnTitle = ({ textContent, avatar }) => {
  // Vérifier si le texte dépasse 17 caractères
  const displayText = textContent.length > 17 ? textContent.slice(0, 17) + '...' : textContent;

  return (
    <div className="ReturnTitle">
      <Icon name="arrow left" />
      <h3>{displayText}</h3>
      {{avatar} && <Avatar className="avatar" />}
    </div>
  );
};

ReturnTitle.propTypes = {
  textContent: PropTypes.string.isRequired,
  avatar: PropTypes.bool,
};

export default ReturnTitle;
