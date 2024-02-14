import React from 'react';
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
    <form className="formAddFriend" action="">
      <div className="selector">
        <MultipleSelector
          placeholderContent="Rechercher des utilisateurs"
          options={users}
        />
      </div>
      <div className="buttonsAddFriend">
        <SimpleButton textContent="Valider" />
        <SimpleButton textContent="Retour" onClick={handleGoBack} />
      </div>
    </form>
  );
};

export default Form;
