import React from 'react';
import './UserUpdate.scss';
import { useMediaQuery } from '@mui/material';

import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import FormUserUpdate from './FormUserUpdate';
import PopupUpdate from '../../Reusable/Popups/PopupUpdate';

const UserUpdate = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

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
