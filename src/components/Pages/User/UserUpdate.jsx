import React from 'react';
import { useDispatch } from 'react-redux';

import './UserUpdate.scss';

import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import FormUserUpdate from './Components/FormUserUpdate';
import ReturnTitle from '../../Reusable/ReturnTitle/ReturnTitle';

import { changeUserInput } from '../../../actions/user';

const UserUpdate = () => {
  const dispatch = useDispatch();

  return (
    <div className="userUpdate">
      <NavBarHeader />
      <ReturnTitle textContent="Modifier mon profil" />
      <FormUserUpdate
        changeField={(newValue, identifier) => {
          const action = changeUserInput(newValue, identifier);
          dispatch(action);
        }}
      />
    </div>
  );
};

export default UserUpdate;
