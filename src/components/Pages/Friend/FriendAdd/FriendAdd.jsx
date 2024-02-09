import React from 'react';
import './FriendAdd.scss';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import MultipleSelector from '../../../Reusable/MultipleSelector/MultipleSelector';

const FriendAdd = () => {
  const users = [
    { key: 'option1', text: 'Option 1', value: 'Option 1' },
    { key: 'option2', text: 'Option 2', value: 'Option 2' },
    { key: 'option3', text: 'Option 3', value: 'Option 3' },
  ];

  return (
    <div className="addAFriend">
      <NavBarHeader isLogged onDesktop={false} />
      <ReturnTitle textContent="Ajouter des amis" avatar={false} />
      <div className="selector">
        <MultipleSelector
          placeholderContent="Rechercher des utlisateurs"
          options={users}
        />
      </div>
      <SimpleButton textContent="Valider" />
      <SimpleButton textContent="Retour" />
    </div>
  );
};

export default FriendAdd;
