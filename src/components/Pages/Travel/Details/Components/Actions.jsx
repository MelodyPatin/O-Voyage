import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';
import IconButton from '../../../../Reusable/Buttons/IconButton';
import './Actions.scss';
import { deleteTrip, leaveTrip } from '../../../../../actions/trip';
import PopupButton from '../../../../Reusable/Popups/PopupButton';

const Actions = () => {
  const { tripId } = useParams(); // Get the 'id' parameter from the URL
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [popupVisible, setPopupVisible] = useState(false);
  const user = useSelector((state) => state.user);
  const CurrentTrip = useSelector((state) => state.trip.trip);
  const [modificationStatus, setModificationStatus] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeletePopup = (event) => {
    event.preventDefault(); // Pour éviter que le lien ne redirige vers une autre page
    setPopupVisible(true);
    setModificationStatus('confirmation');
  };

  const handleLeavePopup = (event) => {
    event.preventDefault(); // Pour éviter que le lien ne redirige vers une autre page
    setPopupVisible(true);
    setModificationStatus('leave');
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    await dispatch(deleteTrip(CurrentTrip.id));
    navigate('/dashboard');
  };

  const handleLeave = async (event) => {
    event.preventDefault();
    await dispatch(leaveTrip(CurrentTrip.id));
    navigate('/dashboard');
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  const isAdmin =
    CurrentTrip && CurrentTrip.admin && CurrentTrip.admin.id === user.userId;

  return (
    <div>
      <div className="buttons">
        {!isMobile ? (
          <div className="simpleButton">
            <Link to={`/trip/${tripId}/travelers`}>
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
        {/* <div className="simpleButton">
          <Link to={`/trip/${tripId}/suitcase`}>
            <SimpleButton textContent="Préparer ma valise" />
          </Link>
        </div> */}
        {isAdmin && (
          <>
            <Link to={`/updatetrip/${tripId}`}>
              <IconButton textContent="Modifier le voyage" icon="edit" />
            </Link>
            <IconButton
              type="button"
              onClick={handleDeletePopup}
              textContent="Supprimer le voyage"
              icon="trash"
            />
          </>
        )}

        <IconButton
          type="button"
          onClick={handleLeavePopup}
          textContent="Quitter le voyage"
          icon="close"
        />
      </div>
      {modificationStatus === 'confirmation' && popupVisible && (
        <PopupButton
          textContent="Merci de confirmer la suppression de ce voyage"
          buttonContent="Confirmer"
          onConfirmation={handleDelete}
          onClose={handlePopupClose}
        />
      )}
      {modificationStatus === 'leave' && popupVisible && (
        <PopupButton
          textContent="Souhaitez vous vraiment quitter ce voyage ?"
          buttonContent="Confirmer"
          onConfirmation={handleLeave}
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
};

export default Actions;
