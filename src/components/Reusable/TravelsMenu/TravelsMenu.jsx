import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import './TravelsMenu.scss';

import { fetchATrip, fetchMyTrips } from '../../../actions/trip';

const TravelsMenu = () => {
  // Get trips and currentTrip from the Redux store
  const trips = useSelector((state) => state.trip.myTrips);
  const currentTrip = useSelector((state) => state.trip.trip);
  // Get the tripId from the URL params
  const { tripId } = useParams();
  const dispatch = useDispatch();

  // Fetch the user's trips and the details of the current trip
  useEffect(() => {
    if (!trips[0]) {
      dispatch(fetchMyTrips());
      dispatch(fetchATrip(tripId));
    }
  }, [dispatch, trips, tripId]);

  // State to track whether the dropdown menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu's open/closed state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div className="TravelsMenu">
        {/* Dropdown trigger section */}
        <div className="dropdown-trigger" onClick={toggleMenu}>
          <div className="text">
            <p>Mes voyages</p>
            <span>{currentTrip.name}</span>
          </div>
          {/* Display the appropriate icon based on the menu's state */}
          {trips.length > 1 && isOpen && <ChevronUpIcon className="icon" />}
          {trips.length > 1 && !isOpen && <ChevronDownIcon className="icon" />}
        </div>
        {/* Dropdown content section (visible when the menu is open) */}
        {isOpen && (
          <div className="dropdown-content">
            {/* Content of the dropdown menu */}
            <ul>
              {trips.map(
                (trip) =>
                  trip.id !== parseInt(tripId, 10) && ( // Exclude the current trip
                    <Link
                      to={`/trip/${trip.id}`}
                      key={trip.id}
                      onClick={closeMenu}
                    >
                      <li className="item">{trip.name}</li>
                    </Link>
                  )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelsMenu;
