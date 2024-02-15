import React from 'react';
import './FriendAdd.scss';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import PopupUpdate from '../../../Reusable/Popups/PopupUpdate'; // Ajout de l'import PopupUpdate
import Form from './Form';

const FriendAdd = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const logged = localStorage.getItem('logged');
  const loggedState = useSelector((state) => state.user.loggedState);

  console.log(logged);
  console.log(loggedState);

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
