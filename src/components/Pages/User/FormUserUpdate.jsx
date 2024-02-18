import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './UserUpdate.scss';
import { Input } from 'semantic-ui-react';
import SimpleButton from '../../Reusable/SimpleButton/SimpleButton';
import {
  deleteUser,
  updateUserInput,
  userUpdateRequest,
} from '../../../actions/user';
import LabelInputUpdate from '../../Reusable/LabelInput/LabelInputUpdate';
import LabelInput from '../../Reusable/LabelInput/LabelInput';
import PopupMessage from '../../Reusable/Popups/PopupMessage';
import PopupButton from '../../Reusable/Popups/PopupButton';

const FormUserUpdate = ({ changeField }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editedValues, setEditedValues] = useState({
    firstnameValue: user.firstnameValue,
    lastnameValue: user.lastnameValue,
    email: user.email,
    password: '',
    avatar: user.avatar,
  });

  // Effet pour mettre à jour les champs édités lorsque l'état Redux change
  useEffect(() => {
    setEditedValues({
      firstnameValue: user.firstnameValue,
      lastnameValue: user.lastnameValue,
      email: user.email,
      avatar: user.avatar,
      password: '',
    });
  }, [user]);

  const handleChange = (event, fieldName) => {
    dispatch(updateUserInput(fieldName, event.target.value));
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(updateUserInput('avatar', reader.result)); // Mettez à jour le champ 'avatar' dans l'état Redux
        setEditedValues({ ...editedValues, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const [popupVisible, setPopupVisible] = useState(false);
  const [modificationStatus, setModificationStatus] = useState(null);

  // Effet pour afficher la popup lorsque le statut de la modification change
  useEffect(() => {
    if (modificationStatus !== null) {
      setPopupVisible(true);
    }
  }, [modificationStatus]);

  const handleSubmit = async (event) => {
    // Dispatch de l'action userUpdateRequest pour déclencher le middleware
    // Cette action enverra les données à l'API
    event.preventDefault();
    try {
      // Effectuer la requête axios pour mettre à jour les données
      const { firstResponse, secondResponse } = await dispatch(
        userUpdateRequest()
      );

      console.log('First Response:', firstResponse);
      console.log('Second Response:', secondResponse);

      // Mise à jour du statut de la modification (succès)
      setModificationStatus('success');
      user.password = '';
    } catch (error) {
      // Mise à jour du statut de la modification (échec)
      setModificationStatus('failure');
    }
  };

  const handleDeletePopup = (event) => {
    event.preventDefault(); // Pour éviter que le lien ne redirige vers une autre page
    setPopupVisible(true);
    setModificationStatus('confirmation');
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    await dispatch(deleteUser());
    if (user.deletionStatus === 'success') {
      // Naviguer vers /home
      navigate('/home');
    } else {
      setModificationStatus('failure');
    }
  };

  const handlePopupClose = () => {
    if (modificationStatus === 'success') {
      navigate(-1);
      setPopupVisible(false);
    } else {
      setPopupVisible(false);
    }
  };
  // Revenir à la page précédente
  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div>
      <div className="formUserUpdate">
        <form className="formUpdateProfile" onSubmit={handleSubmit}>
          <LabelInputUpdate
            name="firstname"
            label="Prénom"
            placeholder=""
            value={editedValues.firstnameValue}
            onChange={(evt) => handleChange(evt, 'firstnameValue')}
          />
          <LabelInputUpdate
            name="name"
            label="Nom"
            placeholder=""
            value={editedValues.lastnameValue}
            onChange={(evt) => handleChange(evt, 'lastnameValue')}
          />
          <LabelInputUpdate
            name="email"
            label="Email"
            placeholder=""
            value={editedValues.email}
            onChange={(evt) => handleChange(evt, 'email')}
          />
          <LabelInput
            type="password"
            name="password"
            label="Mot de passe"
            placeholder=""
            value={user.password}
            onChange={changeField}
          />
          <div className="LabelInput">
            <p>Photo de profil</p>
            <Input name="avatar" type="file" onChange={handleAvatarChange} />
          </div>
          <div className="buttonValidate">
            <SimpleButton textContent="Valider" />
          </div>
        </form>
        <div className="buttonDelete">
          <SimpleButton textContent="Retour" onClick={handleGoBack} />
        </div>
        <a href="" onClick={handleDeletePopup} className="deleteAccount">
          Supprimer mon compte
        </a>
      </div>
      {/* Popup de succès ou d'échec */}
      {popupVisible && (
        <PopupMessage
          textContent={
            modificationStatus === 'success'
              ? 'Modification réussie !'
              : 'Échec de la modification.'
          }
          onClose={handlePopupClose}
        />
      )}
      {modificationStatus === 'confirmation' && popupVisible && (
        <PopupButton
          textContent="Merci de confirmer la suppression de votre compte"
          buttonContent="Confirmer"
          onConfirmation={handleDelete}
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
};

FormUserUpdate.propTypes = {
  changeField: PropTypes.func.isRequired,
};

export default FormUserUpdate;
