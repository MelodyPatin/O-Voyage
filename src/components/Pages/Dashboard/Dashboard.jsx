/* eslint-disable react/no-unescaped-entities */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './Dashboard.scss';

import HeaderConnected from '../../Reusable/HeaderConnected/HeaderConnected';
import IconButton from '../../Reusable/Buttons/IconButton';
import TravelCard from './Components/TravelCard';
import Footer from '../../Reusable/Footer/Footer';

import { fetchCountries, fetchMyTrips } from '../../../actions/trip';

const Dashboard = () => {
  const dispatch = useDispatch();

  // Fetch user's trips on component mount
  useEffect(() => {
    dispatch(fetchMyTrips());
  }, []);

  const trips = useSelector((state) => state.trip.myTrips);

  // Adding status to each trip based on start and end dates
  const tripsWithStatus = trips.map((trip) => {
    const startDate = new Date(trip.startDate);
    const endDate = new Date(trip.endDate);
    const currentDate = new Date();

    const formatDateString = (date) => {
      return date.toISOString().split('T')[0]; // Récupérer uniquement la partie "AAAA-MM-JJ"
    };

    const formattedStartDate = formatDateString(startDate);
    const formattedEndDate = formatDateString(endDate);
    const formattedCurrentDate = formatDateString(currentDate);

    // Status assignment based on current date and trip dates
    if (
      formattedCurrentDate >= formattedStartDate &&
      formattedCurrentDate <= formattedEndDate
    ) {
      return { ...trip, status: 'current' };
    }
    if (formattedStartDate > formattedCurrentDate) {
      return { ...trip, status: 'future' };
    }
    return { ...trip, status: 'passed' };
  });

  // Sorting trips by start date
  const sortedTrips = tripsWithStatus.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  // Filtering trips based on their status
  const currentTrips = sortedTrips.filter((trip) => trip.status === 'current');
  const futureTrips = sortedTrips.filter((trip) => trip.status === 'future');
  const passedTrips = sortedTrips.filter((trip) => trip.status === 'passed');

  // Handle the creation of a new trip
  const handleCreateTrip = () => {
    dispatch(fetchCountries());
  };

  return (
    <div className="dashboard">
      <HeaderConnected />

      {/* Title and "Create a trip" button */}
      <h2>MES VOYAGES</h2>
      <Link to="/createtrip">
        <IconButton
          textContent="Créer un voyage"
          icon="add"
          onClick={handleCreateTrip}
        />
      </Link>

      {/* Trips categorized by status */}
      <div className="list">
        <div className="now">
          {currentTrips.length > 0 && (
            <p className="when">J'y suis actuellement</p>
          )}
          <div className="cardList">
            {currentTrips.map((trip) => (
              <TravelCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
        <div className="future">
          {futureTrips.length > 0 && <p className="when">C'est pour bientôt</p>}
          <div className="cardList">
            {futureTrips.map((trip) => (
              <TravelCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
        <div className="passed">
          {passedTrips.length > 0 && <p className="when">J'y étais</p>}
          <div className="cardList">
            {passedTrips.map((trip) => (
              <TravelCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
