import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import MultipleSelector from '../../../Reusable/MultipleSelector/MultipleSelector';

const Form = () => {
  const navigate = useNavigate();

  const handleGoBack = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    navigate(-1); // Navigue vers la page précédente
  };

  const users = [
    { key: 'option1', text: 'Option 1', value: 'Option 1' },
    { key: 'option2', text: 'Option 2', value: 'Option 2' },
    { key: 'option3', text: 'Option 3', value: 'Option 3' },
  ];

  return (
    <div className="formAddFriend" action="">
      <form action="" className="formAdd">
        <div className="selector">
          <MultipleSelector
            placeholderContent="Rechercher des utilisateurs"
            options={users}
          />
        </div>
        <div className="buttonValidate">
          <SimpleButton type="button" textContent="Valider" />
        </div>
      </form>
      <div className="buttonBack">
        <SimpleButton
          type="button"
          textContent="Retour"
          onClick={handleGoBack}
        />
      </div>
    </div>
  );
};

export default Form;
