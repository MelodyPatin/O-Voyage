import React from 'react';
import './FriendAdd.scss';

import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import Form from './Form';

const FriendAdd = () => (
  <div className="addAFriend">
    <NavBarHeader />
    <ReturnTitle textContent="Ajouter des amis" />
    <Form />
  </div>
);

export default FriendAdd;
