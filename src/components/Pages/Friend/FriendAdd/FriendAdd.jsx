import React from 'react';
import './FriendAdd.scss';
import { useMediaQuery } from '@mui/material';

import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import PopupUpdate from '../../../Reusable/Popups/PopupUpdate'; // Ajout de l'import PopupUpdate
import Form from './Form';

const FriendAdd = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return isMobile ? (
    <div className="addAFriend">
      <NavBarHeader />
      <ReturnTitle textContent="Ajouter des amis" />
      <Form />
    </div>
  ) : (
    <PopupUpdate
      textContent={
        <div className="addAFriend">
          <ReturnTitle textContent="Ajouter des amis" />
          <Form />
        </div>
      }
    />
  );
};

export default FriendAdd;
