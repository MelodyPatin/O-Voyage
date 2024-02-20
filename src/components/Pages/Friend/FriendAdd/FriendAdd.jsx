import React, { useEffect } from 'react';
import './FriendAdd.scss';

import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import { useDispatch, useSelector } from 'react-redux';
import FormAddFriend from './FormAddFriend';
import { changeSearchUsersField } from '../../../../actions/user';

const FriendAdd = () => {
  const dispatch = useDispatch();
  const searchUsersValue = useSelector((state) => state.user.searchUsersValue);

  return (
    <div className="addAFriend">
      <NavBarHeader />
      <ReturnTitle textContent="Ajouter des amis" />
      <FormAddFriend
        inputValue={searchUsersValue}
        changeField={(newValue, identifier) => {
          const action = changeSearchUsersField(newValue, identifier);
          dispatch(action);
        }}
        name="searchUsersValue"
        buttonContent="Ajouter"
        placeholderContent="user@mail.com"
        labelContent="Rechercher un utilisateur"
      />
    </div>
  );
};

export default FriendAdd;
