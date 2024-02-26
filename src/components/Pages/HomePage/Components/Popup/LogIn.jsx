/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Popups.scss';
import { XCircleIcon } from '@heroicons/react/24/solid';

import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';
import Field from './Components/Field';

import { clearErrorMessage } from '../../../../../actions/user';

const LogIn = ({ emailValue, passwordValue, changeField, handleLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.user.errorMessage); // Get error message from the store

  const handleClosePopup = () => {
    dispatch(clearErrorMessage());
    navigate(-1); // Navigate back (close the popup)
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
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
        <p>Se connecter</p>
        {/* Form for login */}
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Email"
            type="text"
            value={emailValue}
            onChange={changeField}
          />
          <Field
            name="password"
            placeholder="Mot de passe"
            type="password"
            value={passwordValue}
            onChange={changeField}
          />
          {/* Submit button */}
          <SimpleButton type="submit" textContent="Connexion" />
          {/* Display error message if there is one */}
          {errorMessage && (
            <p className="errorMessage errorMessageInvalid">{errorMessage}</p>
          )}{' '}
          {/* Afficher le message d'erreur s'il existe */}
        </form>
        {/* Link to signup page */}
        <Link to="/signup">
          <p className="already-signed">Pas encore de compte ? S'inscrire</p>
        </Link>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LogIn;
