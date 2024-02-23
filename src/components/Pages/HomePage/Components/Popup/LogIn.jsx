import React from 'react';
import './Popups.scss';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/solid';
import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';
import Field from './Components/Field';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage } from '../../../../../actions/user';

const LogIn = ({ emailValue, passwordValue, changeField, handleLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.user.errorMessage); // Obtenez le message d'erreur du store

  const handleClosePopup = () => {
    dispatch(clearErrorMessage());
    navigate(-1);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
    dispatch(clearErrorMessage());
  };

  return (
    <div className="containerPopup" onClick={handleClosePopup}>
      <div className="Popup" onClick={(e) => e.stopPropagation()}>
        <XCircleIcon className="icon" onClick={handleClosePopup} />
        <p>Se connecter</p>
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
          <SimpleButton type="submit" textContent="Connexion" />
          {errorMessage && <p className="errorMessage errorMessageInvalid">{errorMessage}</p>} {/* Afficher le message d'erreur s'il existe */}
        </form>
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
