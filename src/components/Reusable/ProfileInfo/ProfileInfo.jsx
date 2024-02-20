import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ProfileInfo.scss';
import { GlobeAmericasIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { fetchMyTrips } from '../../../actions/trip';
import { fetchFriends } from '../../../actions/user';

const ProfileInfo = () => {
  const firstname = useSelector((state) => state.user.firstnameValue);

  const dispatch = useDispatch();

  const trips = useSelector((state) => state.trip.myTrips);
  const friends = useSelector((state) => state.user.friends);

  useEffect(() => {
    if (!trips.length && !friends.length) {
      dispatch(fetchMyTrips());
      dispatch(fetchFriends());
    }
  }, []);

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
          {friends.length} amis
        </p>
      </div>
    </div>
  );
};

export default ProfileInfo;
