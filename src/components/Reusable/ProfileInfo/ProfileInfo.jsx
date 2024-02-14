import React from 'react';
import { useSelector } from 'react-redux';
import './ProfileInfo.scss';
import PropTypes from 'prop-types';
import { GlobeAmericasIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const ProfileInfo = ({ nbFriends }) => {
  const firstname = localStorage.getItem('firstname');
  const trips = useSelector((state) => state.trip.myTrips);

  return (
    <div className="ProfileInfo">
      {/* Display user's first name */}
      <p className="firstName">{firstname}</p>
      <div className="TravelsFriends">
        {/* Display travel icon and number of travels */}
        <GlobeAmericasIcon className="icon" />
        <p>
          {'\u00A0'}
          {trips.length} voyages |{'\u00A0'}
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
  nbFriends: PropTypes.number.isRequired,
};

export default ProfileInfo;
