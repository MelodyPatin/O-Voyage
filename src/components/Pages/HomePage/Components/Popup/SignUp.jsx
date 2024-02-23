import React, { useState } from 'react';
import './Popups.scss';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/solid';
import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';
import Field from './Components/Field';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage } from '../../../../../actions/user';

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

  const handleClosePopup = () => {
    dispatch(clearErrorMessage());
    navigate(-1);
  };

  const handleSignUpSubmit = (evt) => {
    evt.preventDefault();

    // Vérification de tous les champs
    if (
      !firstnameValue ||
      !lastnameValue ||
      !signUpEmailValue ||
      !signUpPasswordValue
    ) {
      // Afficher un message d'erreur indiquant que tous les champs doivent être remplis
      setIsFieldsFilled(false);
      return;
    }

    setIsFieldsFilled(true);

    // Vérification de l'email
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

    // Tous les champs sont valides, envoyer la requête
    handleSignUp();
    dispatch(clearErrorMessage());
  };

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const validatePassword = (password) => {
    // Vérification si le mot de passe contient au moins 6 caractères, une majuscule et un chiffre
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="containerPopup" onClick={handleClosePopup}>
      <div className="Popup" onClick={(e) => e.stopPropagation()}>
        <XCircleIcon className="icon" onClick={handleClosePopup} />
        <p>Nouveau compte</p>
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
          <SimpleButton textContent="S'inscrire" />
          {!isFieldsFilled && (
            <p className="errorMessage errorMessageFill">
              Veuillez remplir tous les champs
            </p>
          )}
          {errorMessage && (
            <p className="errorMessage errorMessageMail">{errorMessage}</p>
          )}{' '}
        </form>
        <Link to="/home/login">
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
