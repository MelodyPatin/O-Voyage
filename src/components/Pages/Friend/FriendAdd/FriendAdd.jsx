import React from 'react';
import './FriendAdd.scss';
import { useNavigate } from 'react-router-dom';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import MultipleSelector from '../../../Reusable/MultipleSelector/MultipleSelector';

const FriendAdd = () => {
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
    <div className="addAFriend">
      <NavBarHeader />
      <ReturnTitle textContent="Ajouter des amis" avatar={false} />
      <form action="">
        <div className="selector">
          <MultipleSelector
            placeholderContent="Rechercher des utlisateurs"
            options={users}
          />
        </div>
        <div className="buttonsAddFriend">
          <SimpleButton textContent="Valider" />
          <SimpleButton textContent="Retour" onClick={handleGoBack} />
        </div>
      </form>
    </div>
  );
};

export default FriendAdd;
