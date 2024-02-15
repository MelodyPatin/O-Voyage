import React from 'react';
import './UserUpdate.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import LabelInput from '../../Reusable/LabelInput/LabelInput';
import SimpleButton from '../../Reusable/SimpleButton/SimpleButton';
import ReturnTitle from '../../Reusable/ReturnTitle/ReturnTitle';

const FormUserUpdate = ({ FirstName, LastName, Email }) => {
  const navigate = useNavigate();

  const handleGoBack = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    navigate(-1); // Navigue vers la page précédente
  };

  return (
    <div>
      <ReturnTitle textContent="Modifier mon profil" avatar={false} />
      <form className="FormUpdateProfile" action="">
        <LabelInput label="Prénom" placeholder="" value={FirstName} />
        <LabelInput label="Nom" placeholder="" value={LastName} />
        <LabelInput label="Email" placeholder="" value={Email} />
        <LabelInput label="Mot de passe" placeholder="" value="" />
        <div className="LabelInput">
          <p>Photo de profil</p>
          <Input type="file" />
        </div>
        <div className="buttonsUpdateProfile">
          <SimpleButton textContent="Valider" />
          <SimpleButton textContent="Retour" onClick={handleGoBack} />
        </div>
      </form>
      <span className="deleteAccount">Supprimer mon compte</span>
    </div>
  );
};

FormUserUpdate.propTypes = {
  FirstName: PropTypes.string.isRequired,
  LastName: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired,
};

export default FormUserUpdate;
