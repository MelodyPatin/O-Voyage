import React from 'react';
import PropTypes from 'prop-types';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import IconButton from '../../../Reusable/IconButton/IconButton';
import './Actions.scss';

const Actions = ({ onDesktop }) => {
  return (
    <div>
      <div className="buttons">
        {onDesktop ? (
          <div className="simpleButton">
            <SimpleButton textContent="Voir les voyageurs" />
          </div>
        ) : (
          <div className="simpleButton">
            <IconButton textContent="Faire une proposition" icon="add" />
          </div>
        )}
        <IconButton textContent="Modifier le voyage" icon="edit" />
        <IconButton textContent="Supprimer le voyage" icon="trash" />
        <IconButton textContent="Quitter le voyage" icon="close" />
      </div>
    </div>
  );
};

Actions.propTypes = {
  onDesktop: PropTypes.bool,
};

export default Actions;