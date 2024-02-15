import React from 'react';
import './UserUpdate.scss';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import FormUserUpdate from './FormUserUpdate';
import PopupUpdate from '../../Reusable/Popups/PopupUpdate';

const UserUpdate = () => {
  const logged = localStorage.getItem('logged');
  const loggedState = useSelector((state) => state.user.loggedState);
  const isMobile = useMediaQuery('(max-width: 767px)');

  console.log(logged);
  console.log(loggedState);
  return (
    <div>
      {!isMobile ? (
        <PopupUpdate textContent={<FormUserUpdate />} />
      ) : (
        <>
          <NavBarHeader isLogged onDesktop={false} />
          <FormUserUpdate />
        </>
      )}
    </div>
  );
};

export default UserUpdate;
