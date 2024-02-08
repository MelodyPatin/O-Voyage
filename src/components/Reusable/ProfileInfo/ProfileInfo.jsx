import React from 'react';
import './ProfileInfo.scss';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { GlobeAmericasIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const ProfileInfo = ({ firstName, nbTravels, nbFriends }) => {
  return (
    <div className="ProfileInfo">
      <p>{firstName}</p>
      <div className='TravelsFriends'>
        <GlobeAmericasIcon className="icon" />
        <p>{nbTravels} voyages |</p>
        <UserGroupIcon className="icon" />
        <p>{nbFriends} amis</p>
      </div>
    </div>
  );
};

ProfileInfo.propTypes = {
  firstName: PropTypes.string.isRequired,
  nbTravels: PropTypes.number.isRequired,
  nbFriends: PropTypes.number.isRequired,
};

export default ProfileInfo;
