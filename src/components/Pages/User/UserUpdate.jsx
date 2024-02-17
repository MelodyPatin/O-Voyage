import React from 'react';
import './UserUpdate.scss';

import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import FormUserUpdate from './FormUserUpdate';

const UserUpdate = () => (
  <div>
    <NavBarHeader isLogged onDesktop={false} />
    <FormUserUpdate />
  </div>
);

export default UserUpdate;
