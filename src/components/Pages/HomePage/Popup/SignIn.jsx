import React from 'react';
import './Popups.scss';
import { useNavigate } from 'react-router-dom'; // Importer useHistory depuis react-router-dom
import { XCircleIcon } from '@heroicons/react/24/solid';
import { Input } from 'semantic-ui-react';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import Field from './Field/Field';

// Functional component : popup with input fields and a close button
const SignIn = () => {
  const navigate = useNavigate(); // Utiliser useNavigate pour la navigation

  const handleClosePopup = () => {
    // Naviguer vers l'url précédente lors de la fermeture de la popup
    navigate(-1);
  };

  return (
    <div className="containerPopup" onClick={handleClosePopup}>
      <div className="Popup" onClick={(e) => e.stopPropagation()}>
        <XCircleIcon className="icon" onClick={handleClosePopup} />
        <p>Nouveau compte</p>
        <Field placeholder="Prénom" />
        <Field placeholder="Nom" />
        <Field placeholder="Email" />
        <Field placeholder="Mot de passe" />
        <SimpleButton textContent="S'inscrire" />
      </div>
    </div>
  );
};

export default SignIn;
