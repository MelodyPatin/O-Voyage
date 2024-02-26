/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './Popups.scss';
import { XCircleIcon } from '@heroicons/react/24/solid';

import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';
import Field from './Components/Field';

import { clearErrorMessage } from '../../../../../actions/user';

// SignUp component for user registration
const SignUp = ({
  firstnameValue,
  lastnameValue,
  signUpEmailValue,
  signUpPasswordValue,
  changeField,
  handleSignUp,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isFieldsFilled, setIsFieldsFilled] = useState(true);

  const errorMessage = useSelector((state) => state.user.errorMessage); // Obtenez le message d'erreur du store

  // Close the signup popup and clear error message
  const handleClosePopup = () => {
    dispatch(clearErrorMessage());
    navigate(-1); // Navigate back (close the popup)
  };

  // Validate email format
  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  // Validate password format
  const validatePassword = (password) => {
    // Vérification si le mot de passe contient au moins 6 caractères, une majuscule et un chiffre
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(password);
  };

  // Handle signup form submission
  const handleSignUpSubmit = (evt) => {
    evt.preventDefault();

    // Check if all fields are filled
    if (
      !firstnameValue ||
      !lastnameValue ||
      !signUpEmailValue ||
      !signUpPasswordValue
    ) {
      // Displays an error message to make sure the user filles all the fields
      setIsFieldsFilled(false);
      return;
    }

    setIsFieldsFilled(true);

    // Validate password
    if (!validateEmail(signUpEmailValue)) {
      setIsEmailValid(false);
      return;
    }
    setIsEmailValid(true);

    // Vérification du mot de passe
    if (!validatePassword(signUpPasswordValue)) {
      setIsPasswordValid(false);
      return;
    }
    setIsPasswordValid(true);

    // All fields are valid, send the request
    handleSignUp();
    dispatch(clearErrorMessage());
  };

  return (
    // Container for the full-screen overlay, used to close the popup when clicked outside
    <div className="containerPopup" onClick={handleClosePopup} role="overlay">
      {/* Popup content */}
      <div
        className="Popup"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
        role="dialog" // ARIA role for dialog
        aria-describedby="signup-instructions" // ARIA description for accessibility
      >
        <XCircleIcon className="icon" onClick={handleClosePopup} />
        <p>Nouveau compte</p>
        {/* Form for Signup */}
        <form autoComplete="off" onSubmit={handleSignUpSubmit}>
          <Field
            placeholder="Prénom"
            name="firstnameValue"
            type="text"
            onChange={changeField}
            value={firstnameValue}
          />
          <Field
            placeholder="Nom"
            name="lastnameValue"
            type="text"
            onChange={changeField}
            value={lastnameValue}
          />
          <Field
            placeholder="Email"
            name="signUpEmail"
            type="text"
            onChange={changeField}
            value={signUpEmailValue}
          />
          {!isEmailValid && (
            <p className="errorMessage">Adresse email invalide</p>
          )}
          <Field
            placeholder="Mot de passe"
            name="signUpPassword"
            type="password"
            onChange={changeField}
            value={signUpPasswordValue}
          />
          {!isPasswordValid && (
            <>
              <p className="errorMessage">Mot de passe invalide</p>
              <p className="conditions">
                au moins 6 caractères, une majuscule et un chiffre
              </p>
            </>
          )}
          {/* Submit button */}
          <SimpleButton textContent="S'inscrire" />
          {/* Display error message if there is one */}
          {!isFieldsFilled && (
            <p className="errorMessage errorMessageFill">
              Veuillez remplir tous les champs
            </p>
          )}
          {errorMessage && (
            <p className="errorMessage errorMessageMail">{errorMessage}</p>
          )}{' '}
        </form>
        {/* Link to login page */}
        <Link to="/login">
          <p className="already-signed">Déjà un compte ? Se connecter</p>
        </Link>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  firstnameValue: PropTypes.string.isRequired,
  lastnameValue: PropTypes.string.isRequired,
  signUpEmailValue: PropTypes.string.isRequired,
  signUpPasswordValue: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};

export default SignUp;
