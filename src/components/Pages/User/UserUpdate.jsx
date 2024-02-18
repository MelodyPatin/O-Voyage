import React from 'react';
import './UserUpdate.scss';

import { useDispatch } from 'react-redux';
import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import FormUserUpdate from './FormUserUpdate';
import { changeUserInput } from '../../../actions/user';

const UserUpdate = () => {
  const dispatch = useDispatch();

  return (
    <div className="userUpdate">
      <NavBarHeader />
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
