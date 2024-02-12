import React from 'react';
import './Popups.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Importer useHistory depuis react-router-dom
import { XCircleIcon } from '@heroicons/react/24/solid';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import Field from './Field/Field';

// Functional component : popup with input fields and a close button
const LogIn = ({ emailValue, passwordValue, changeField, handleLogin, isLogged }) => {
  const navigate = useNavigate(); // Utiliser useNavigate pour la navigation

  const handleClosePopup = () => {
    // Revenir à l'URL précédent lors de la fermeture de la popup
    navigate(-1);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
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
        </form>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
};

LogIn.defaultProps = {
  isLogged: false,
};

export default LogIn;
