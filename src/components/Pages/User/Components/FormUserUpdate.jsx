import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../UserUpdate.scss';
import { Input } from 'semantic-ui-react';
import SimpleButton from '../../../Reusable/Buttons/SimpleButton';
import {
  clearErrorMessage,
  deleteUser,
  handleModificationStatus,
  setErrorMessage,
  updateUserInput,
  userUpdateRequest,
} from '../../../../actions/user';
import LabelInputUpdate from '../../../Reusable/LabelInput/LabelInputUpdate';
import LabelInput from '../../../Reusable/LabelInput/LabelInput';
import PopupMessage from '../../../Reusable/Popups/PopupMessage';
import PopupButton from '../../../Reusable/Popups/PopupButton';

const FormUserUpdate = ({ changeField }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const errorMessage = useSelector((state) => state.user.errorMessage);

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
        dispatch(updateUserInput('avatarUpdate', reader.result)); // Mettez à jour le champ 'avatar' dans l'état Redux
        setEditedValues({ ...editedValues, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const [popupVisible, setPopupVisible] = useState(false);
  const [modificationStatusTemp, setModificationStatusTemp] = useState(false);
  const modificationStatus = useSelector(
    (state) => state.user.modificationStatus
  );

  // Effet pour afficher la popup lorsque le statut de la modification change
  useEffect(() => {
    if (modificationStatus !== null) {
      setPopupVisible(true);
    }
  }, [modificationStatus]);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Vérification des champs prénom, nom et email
    if (
      editedValues.firstnameValue.trim() === '' ||
      editedValues.lastnameValue.trim() === '' ||
      editedValues.email.trim() === ''
    ) {
      // Afficher un message d'erreur ou prendre une autre action, comme empêcher la soumission
      dispatch(setErrorMessage('Veuillez remplir nom prénom et email.'));
      return; // Arrêter la soumission du formulaire
    }
  
    // Vérification du format de l'adresse email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      dispatch(setErrorMessage("Veuillez entrer une adresse e-mail valide."));
      return; // Arrêter la soumission du formulaire
    }
  
    // Vérification du champ de mot de passe si non vide
    if (user.password && user.password.trim() !== '') {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/; // Expression régulière pour vérifier la présence d'au moins une majuscule, un chiffre et une longueur minimale de 6 caractères
      if (!passwordRegex.test(user.password)) {
        dispatch(setErrorMessage('Le mot de passe doit contenir au moins une majuscule, un chiffre et avoir une longueur minimale de 6 caractères.'));
        return; // Arrêter la soumission du formulaire
      }
    }
  
    // Si tous les champs sont remplis et que le mot de passe est valide (s'il est non vide et qu'il passe la validation), procéder à la soumission du formulaire
    dispatch(userUpdateRequest());
    dispatch(clearErrorMessage());
  };
  
  

  const handleDeletePopup = (event) => {
    event.preventDefault(); // Pour éviter que le lien ne redirige vers une autre page
    setPopupVisible(true);
    setModificationStatusTemp('confirmation');
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    await dispatch(deleteUser());
    if (user.deletionStatus === 'success') {
      // Naviguer vers /home
      navigate('/');
    } else {
      setModificationStatusTemp('failure');
    }
  };

  const handlePopupClose = () => {
    if (modificationStatus === 'success') {
      navigate(-1);
      setPopupVisible(false);
      dispatch(handleModificationStatus());
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
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}
          <div className="buttonValidate">
            <SimpleButton textContent="Valider" />
          </div>
        </form>
        <div className="buttonDelete">
          <SimpleButton textContent="Retour" onClick={handleGoBack} />
        </div>
        <button
          type="button"
          onClick={handleDeletePopup}
          className="deleteAccount"
        >
          Supprimer mon compte
        </button>
      </div>
      {/* Popup de succès ou d'échec */}
      {popupVisible &&
        (modificationStatus === 'success' ? (
          <PopupMessage
            textContent="Modification réussie !"
            onClose={handlePopupClose}
          />
        ) : modificationStatus === 'failure' ? (
          <PopupMessage
            textContent="Échec de la modification."
            onClose={handlePopupClose}
          />
        ) : null)}
      {modificationStatusTemp === 'confirmation' && popupVisible && (
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
