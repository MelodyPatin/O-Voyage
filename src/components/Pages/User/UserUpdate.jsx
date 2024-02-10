import React from 'react';
import './UserUpdate.scss';
import PropTypes from 'prop-types';

import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import FormUserUpdate from './FormUserUpdate';
import PopupUpdate from '../../Reusable/Popups/PopupUpdate';

const UserUpdate = ({ onDesktop }) => {
  return (
    <div>
      {!onDesktop && (
        <>
          <NavBarHeader isLogged onDesktop={false} />
          <FormUserUpdate FirstName="Coucou" LastName='COCOUC' Email='COUCOU '/>
        </>
      )}
      {onDesktop && <PopupUpdate textContent={<FormUserUpdate FirstName="Coucou" LastName='COCOUC' Email='COUCOU ' />} />}
    </div>
  );
};

UserUpdate.propTypes = {
  onDesktop: PropTypes.bool,
};

export default UserUpdate;
