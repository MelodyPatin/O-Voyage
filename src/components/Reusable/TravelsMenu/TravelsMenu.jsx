import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import './TravelsMenu.scss'; // Assurez-vous d'avoir un fichier de style pour le menu déroulant

const TravelsMenu = () => {
  const trips = useSelector((state) => state.trip.myTrips);
  const currentTrip = useSelector((state) => state.trip.trip);
  const { tripId } = useParams(); // Get the 'id' parameter from the URL

  // State to track whether the dropdown menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu's open/closed state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="TravelsMenu">
        {/* Dropdown trigger section */}
        <div className="dropdown-trigger" onClick={toggleMenu}>
          <div className="text">
            <p>Mes voyages</p>
            <span>
              {currentTrip ? currentTrip.name : 'Sélectionnez un voyage'}
            </span>
          </div>
          {/* Display the appropriate icon based on the menu's state */}
          {isOpen && <ChevronUpIcon className="icon" />}
          {!isOpen && <ChevronDownIcon className="icon" />}
        </div>
        {/* Dropdown content section (visible when the menu is open) */}
        {isOpen && (
          <div className="dropdown-content">
            {/* Contenu du menu déroulant */}
            <ul>
              {trips.map(
                (trip) =>
                  trip.id !== parseInt(tripId, 10) && ( // Exclude the current trip
                    <Link to={`/trip/${trip.id}`} key={trip.id}>
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
