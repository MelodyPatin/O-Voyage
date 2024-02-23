import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import ReturnTitle from '../../../../../Reusable/ReturnTitle/ReturnTitle';
import SimpleButton from '../../../../../Reusable/Buttons/SimpleButton';

import './ActivityResume.scss';
import Tag from '../../../../../Reusable/Tag/Tag';
import IconButton from '../../../../../Reusable/Buttons/IconButton';
import { deleteActivity } from '../../../../../../actions/activity';
import PopupButton from '../../../../../Reusable/Popups/PopupButton';

const ActivityResume = () => {
  const dispatch = useDispatch();
  const { activityId } = useParams(); // Get the 'id' parameter from the URL
  const { tripId } = useParams();
  const [popupVisible, setPopupVisible] = useState(false);
  const [modificationStatus, setModificationStatus] = useState(null);
  const currentActivity = useSelector((state) => state.activity.activity);
  const currentTrip = useSelector((state) => state.trip.trip);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  // Vérifiez si currentActivity est défini et a la structure attendue
  if (
    !currentActivity ||
    !currentActivity.tags ||
    currentActivity.tags.length === 0
  ) {
    // Retournez un message ou un rendu alternatif si les données ne sont pas encore disponibles
    return <div>Merci de patienter...</div>;
  }

  const handleDeletePopup = (event) => {
    event.preventDefault(); // Pour éviter que le lien ne redirige vers une autre page
    setPopupVisible(true);
    setModificationStatus('confirmation');
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    await dispatch(deleteActivity(currentActivity.id));
    navigate(-1);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

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

  const isTripCreator =
    currentTrip && currentTrip.admin && currentTrip.admin.id === user.userId;

  const isActivityCreator =
    currentActivity &&
    currentActivity.creator &&
    currentActivity.creator.id === user.userId;

  return (
    <div className="ActivityResume">
      <ReturnTitle avatar textContent={`#2 ${currentActivity.name}`} />
      <div className="content">
        <p>Activité : {currentActivity.name}</p>
        <p>Adresse : {currentActivity.postalAddress}</p>
        <p>Prix : {currentActivity.price}</p>
        <p>Horaires : {currentActivity.openingTimeAndDays}</p>
        <p>Site internet : {currentActivity.url} </p>
        <p>Description : {currentActivity.description} </p>
        <Tag
          category={tag}
          text={currentActivity.tags[0].name}
          className="tag"
        />
        {isActivityCreator ||
          (isTripCreator && (
            <>
              <Link to={`/trip/${tripId}/updateactivity/${activityId}`}>
                <IconButton textContent="Modifier l'activité" icon="edit" />
              </Link>
              <IconButton
                type="button"
                onClick={handleDeletePopup}
                textContent="Supprimer l'activité"
                icon="trash"
              />
            </>
          ))}
        <Link to={`/trip/${tripId}`}>
          <SimpleButton textContent="Fermer" />
        </Link>
      </div>
      {/* Popup de succès ou d'échec */}
      {modificationStatus === 'confirmation' && popupVisible && (
        <PopupButton
          textContent="Merci de confirmer la suppression de cette activité"
          buttonContent="Confirmer"
          onConfirmation={handleDelete}
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
};

export default ActivityResume;
