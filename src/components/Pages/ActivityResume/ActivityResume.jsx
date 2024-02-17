import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import ReturnTitle from '../../Reusable/ReturnTitle/ReturnTitle';
import SimpleButton from '../../Reusable/SimpleButton/SimpleButton';

import './ActivityResume.scss';
import Tag from '../../Reusable/Tag/Tag';
import IconButton from '../../Reusable/IconButton/IconButton';

const ActivityResume = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL

  const currentActivity = useSelector((state) => state.activity.activity);

  // Vérifiez si currentActivity est défini et a la structure attendue
  if (
    !currentActivity ||
    !currentActivity.tags ||
    currentActivity.tags.length === 0
  ) {
    // Retournez un message ou un rendu alternatif si les données ne sont pas encore disponibles
    return <div>Merci de patienter...</div>;
  }

  // Utilisez la syntaxe optionnelle de chaîne pour éviter les erreurs si les propriétés ne sont pas définies
  const tagId = currentActivity.tags[0]?.id;
  let tag = '';

  switch (tagId) {
    case 1:
      tag = 'restaurant selected';
      break;
    case 2:
      tag = 'pub selected';
      break;
    case 3:
      tag = 'culture selected';
      break;
    case 4:
      tag = 'activity selected';
      break;
    // Add more cases if needed
    default:
      // Default case if none of the above conditions match
      tag = '';
      break;
  }

  return (
    <div className="ActivityResume">
      <ReturnTitle avatar textContent={`#2 ${currentActivity.name}`} />
      <div className="content">
        <p>Activité : {currentActivity.name}</p>
        <p>Adresse : {currentActivity.postalAddress}</p>
        <p>Prix : {currentActivity.price}€</p>
        <p>Horaires : {currentActivity.openingTimeAndDays}</p>
        <p>Site internet : {currentActivity.url} </p>
        <p>Description : {currentActivity.description} </p>
        <Tag
          category={tag}
          text={currentActivity.tags[0].name}
          className="tag"
        />
        {/* <div className="icons">
          <Link to={`/updateactivity/${id}`}>
            <PencilIcon className="icon" />
          </Link>
          <TrashIcon className="icon" />
            </div> */}
        <Link to={`/trip/${id}/updateactivity/${id}`}>
          <IconButton textContent="Modifier l'activité" icon="edit" />
        </Link>
        <IconButton textContent="Supprimer l'activité" icon="trash" />
        <SimpleButton textContent="Fermer" />
      </div>
    </div>
  );
};

export default ActivityResume;
