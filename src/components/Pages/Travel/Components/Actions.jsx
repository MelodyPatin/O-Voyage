import React from 'react';
import { useMediaQuery } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import IconButton from '../../../Reusable/IconButton/IconButton';
import './Actions.scss';

const Actions = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div>
      <div className="buttons">
        {!isMobile ? (
          <div className="simpleButton">
            <Link to={`/trip/${id}/travelers`}>
              <SimpleButton textContent="Voir les voyageurs" />
            </Link>
          </div>
        ) : (
          <div className="simpleButton">
            <Link to="/createactivity">
              <IconButton textContent="Faire une proposition" icon="add" />
            </Link>
          </div>
        )}
        <Link to="/updatetrip">
          <IconButton textContent="Modifier le voyage" icon="edit" />
        </Link>
        <IconButton textContent="Supprimer le voyage" icon="trash" />
        <IconButton textContent="Quitter le voyage" icon="close" />
      </div>
    </div>
  );
};

export default Actions;
