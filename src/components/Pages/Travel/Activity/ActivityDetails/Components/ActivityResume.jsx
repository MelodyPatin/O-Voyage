import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import './ActivityResume.scss';

import Tag from '../../../../../Reusable/Tag/Tag';
import IconButton from '../../../../../Reusable/Buttons/IconButton';
import ReturnTitle from '../../../../../Reusable/ReturnTitle/ReturnTitle';
import SimpleButton from '../../../../../Reusable/Buttons/SimpleButton';
import PopupButton from '../../../../../Reusable/Popups/PopupButton';

import { deleteActivity, fetchTags } from '../../../../../../actions/activity';

const ActivityResume = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activityId } = useParams(); // Get the 'id' parameter from the URL
  const { tripId } = useParams();
  const [popupVisible, setPopupVisible] = useState(false);
  const [modificationStatus, setModificationStatus] = useState(null);
  const currentActivity = useSelector((state) => state.activity.activity);
  const user = useSelector((state) => state.user);

  // UseEffect to fetch tags when the component mounts
  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  // Check if currentActivity is defined and has the expected structure
  if (
    !currentActivity ||
    !currentActivity.tags ||
    currentActivity.tags.length === 0
  ) {
    // Return a message or alternative rendering if data is not yet available
    return <div>Merci de patienter...</div>;
  }

  const handleDeletePopup = (event) => {
    event.preventDefault(); // To prevent the link from redirecting to another page
    setPopupVisible(true);
    setModificationStatus('confirmation');
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    await dispatch(deleteActivity(currentActivity.id));
    navigate(-1); // Navigate back to the previous page
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  const isAdmin =
    currentActivity &&
    currentActivity.creator &&
    currentActivity.creator.id === user.userId;

  return (
    <div className="ActivityResume">
      <ReturnTitle textContent={`#2 ${currentActivity.name}`} />
      <div className="content">
        {/* Display various details about the activity */}
        <p>Activité : {currentActivity.name}</p>
        <p>Adresse : {currentActivity.postalAddress}</p>
        <p>Prix : {currentActivity.price}</p>
        <p>Horaires : {currentActivity.openingTimeAndDays}</p>
        <p>Site internet : {currentActivity.url} </p>
        <p>Description : {currentActivity.description} </p>
        <Tag
          key={currentActivity.tags[0].id}
          text={currentActivity.tags[0].name}
          color={currentActivity.tags[0].color}
          className="tag"
        />
        {/* Display edit and delete buttons for admins */}
        {isAdmin && (
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
        )}
        <Link to={`/trip/${tripId}`}>
          <SimpleButton textContent="Fermer" />
        </Link>
      </div>
      {/* Display a confirmation popup for deletion */}
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
