import React from 'react';
import './FriendAdd.scss';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';

const FriendAdd = () => {
  return (
    <div>
      <NavBarHeader />
      <ReturnTitle textContent="Ajouter un ami" avatar={false} />
      <SimpleButton textContent="Valider" />
      <SimpleButton textContent="Retour" />
    </div>
  );
};

export default FriendAdd;
