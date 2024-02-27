import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import '../UserUpdate.scss';
import { Input } from 'semantic-ui-react';

import SimpleButton from '../../../Reusable/Buttons/SimpleButton';
import LabelInputUpdate from '../../../Reusable/LabelInput/LabelInputUpdate';
import LabelInput from '../../../Reusable/LabelInput/LabelInput';
import PopupMessage from '../../../Reusable/Popups/PopupMessage';
import PopupButton from '../../../Reusable/Popups/PopupButton';

import {
  clearErrorMessage,
  deleteUser,
  handleModificationStatus,
  setErrorMessage,
  updateUserInput,
  userUpdateRequest,
} from '../../../../actions/user';

const FormUserUpdate = ({ changeField }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  // State to hold edited form values
  const [editedValues, setEditedValues] = useState({
    firstnameValue: user.firstnameValue,
    lastnameValue: user.lastnameValue,
    email: user.email,
    password: '',
    avatar: user.avatar,
  });

  // Effect to update edited values when Redux state changes
  useEffect(() => {
    setEditedValues({
      firstnameValue: user.firstnameValue,
      lastnameValue: user.lastnameValue,
      email: user.email,
      avatar: user.avatar,
      password: '',
    });
  }, [user]);

  // Handle change in input fields
  const handleChange = (event, fieldName) => {
    dispatch(updateUserInput(fieldName, event.target.value));
  };

  // Handle change in avatar input
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

  // State for popup visibility and modification status
  const [popupVisible, setPopupVisible] = useState(false);
  const [modificationStatusTemp, setModificationStatusTemp] = useState(false);
  const modificationStatus = useSelector(
    (state) => state.user.modificationStatus
  );

  // Effect to display popup when modification status changes
  useEffect(() => {
    if (modificationStatus !== null) {
      setPopupVisible(true);
    }
  }, [modificationStatus]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation of form fields
    if (
      editedValues.firstnameValue.trim() === '' ||
      editedValues.lastnameValue.trim() === '' ||
      editedValues.email.trim() === ''
    ) {
      dispatch(
        setErrorMessage("Veuillez remplir le prénom, le nom et l'email.")
      );
      return;
    }

    // Check if firstname exceeds 50 characters
    if (editedValues.firstnameValue.length > 50) {
      dispatch(
        setErrorMessage('Le prénom ne peut pas dépasser 50 caractères.')
      );
      return;
    }

    // Check if lastname exceeds 50 characters
    if (editedValues.lastnameValue.length > 50) {
      dispatch(setErrorMessage('Le nom ne peut pas dépasser 50 caractères.'));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      dispatch(setErrorMessage('Veuillez entrer une adresse e-mail valide.'));
      return;
    }

    if (user.password && user.password.trim() !== '') {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/; // Regular expression to check for the presence of at least one uppercase letter, one digit, and a minimum length of 6 characters
      if (!passwordRegex.test(user.password)) {
        dispatch(
          setErrorMessage(
            'Le mot de passe doit contenir au moins une majuscule, un chiffre et avoir une longueur minimale de 6 caractères.'
          )
        );
        return;
      }
    }

    // If all fields are filled and password is valid, submit the form
    dispatch(userUpdateRequest());
    dispatch(clearErrorMessage());
  };

  // Handle delete account popup
  const handleDeletePopup = (event) => {
    event.preventDefault();
    setPopupVisible(true);
    setModificationStatusTemp('confirmation');
  };

  // Handle account deletion
  const handleDelete = async (event) => {
    event.preventDefault();
    await dispatch(deleteUser());
    if (user.deletionStatus === 'success') {
      navigate('/');
    } else {
      setModificationStatusTemp('failure');
    }
  };

  // Close popup
  const handlePopupClose = () => {
    if (modificationStatus === 'success') {
      navigate(-1);
      setPopupVisible(false);
      dispatch(handleModificationStatus());
    } else {
      setPopupVisible(false);
    }
  };

  // Go back to the previous page
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="formUserUpdate">
        <form className="formUpdateProfile" onSubmit={handleSubmit}>
          {/* Input fields for user details */}
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
          {/* Input field for avatar */}
          <div className="LabelInput">
            <p>Photo de profil</p>
            <Input name="avatar" type="file" onChange={handleAvatarChange} />
          </div>
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}
          {/* Submit button */}
          <div className="buttonValidate">
            <SimpleButton textContent="Valider" />
          </div>
        </form>
        {/* Return button */}
        <div className="buttonDelete">
          <SimpleButton textContent="Retour" onClick={handleGoBack} />
        </div>
        {/* Delete account button */}
        <button
          type="button"
          onClick={handleDeletePopup}
          className="deleteAccount"
        >
          Supprimer mon compte
        </button>
      </div>
      {/* Popup for success or failure */}
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
      {/* Popup for confirmation of account deletion */}
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
