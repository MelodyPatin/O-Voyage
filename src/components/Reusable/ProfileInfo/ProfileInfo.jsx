import React from 'react';
import './ProfileInfo.scss';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { GlobeAmericasIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const ProfileInfo = ({ nbTravels, nbFriends }) => {
  const firstname = localStorage.getItem('firstname');

  return (
    <div className="ProfileInfo">
      {/* Display user's first name */}
      <p className="firstName">{firstname}</p>
      <div className="TravelsFriends">
        {/* Display travel icon and number of travels */}
        <GlobeAmericasIcon className="icon" />
        <p>
          {'\u00A0'}
          {nbTravels} voyages |{'\u00A0'}
        </p>
        {/* Display friends icon and number of friends */}
        <UserGroupIcon className="icon" />
        <p>
          {'\u00A0'}
          {nbFriends} amis
        </p>
      </div>
    </div>
  );
};

ProfileInfo.propTypes = {
  nbTravels: PropTypes.number.isRequired,
  nbFriends: PropTypes.number.isRequired,
};

export default ProfileInfo;
