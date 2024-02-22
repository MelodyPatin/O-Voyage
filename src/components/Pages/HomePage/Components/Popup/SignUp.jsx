import React from 'react';
import './Popups.scss';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom'; // Importer useHistory depuis react-router-dom
import { XCircleIcon } from '@heroicons/react/24/solid';
import { Input } from 'semantic-ui-react';
import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';
import Field from './Components/Field';

// Functional component : popup with input fields and a close button
const SignUp = ({
  firstnameValue,
  lastnameValue,
  signUpEmailValue,
  signUpPasswordValue,
  changeField,
  handleSignUp,
}) => {
  const navigate = useNavigate(); // Utiliser useNavigate pour la navigation

  const handleClosePopup = () => {
    // Naviguer vers l'url précédente lors de la fermeture de la popup
    navigate(-1);
  };

  const handleSignUpSubmit = (evt) => {
    evt.preventDefault();
    handleSignUp();
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
          <Field
            placeholder="Mot de passe"
            name="signUpPassword"
            type="password"
            onChange={changeField}
            value={signUpPasswordValue}
          />
          <SimpleButton textContent="S'inscrire" />
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
