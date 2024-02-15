/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Dashboard.scss';
import HeaderConnected from '../../Reusable/HeaderConnected/HeaderConnected';
import IconButton from '../../Reusable/IconButton/IconButton';
import TravelCard from './Components/TravelCard';
import Footer from '../../Reusable/Footer/Footer';

const Dashboard = () => {
  const trips = useSelector((state) => state.trip.myTrips);
  const tripsWithStatus = trips.map((trip) => {
    const startDate = new Date(trip.startDate).getTime();
    const endDate = new Date(trip.endDate).getTime();
    const currentDate = new Date().getTime();

    if (currentDate >= startDate && currentDate <= endDate) {
      return { ...trip, status: 'current' };
    }
    if (startDate > currentDate) {
      return { ...trip, status: 'future' };
    }
    return { ...trip, status: 'passed' };
  });

  const sortedTrips = tripsWithStatus.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  const currentTrips = sortedTrips.filter((trip) => trip.status === 'current');
  const futureTrips = sortedTrips.filter((trip) => trip.status === 'future');
  const passedTrips = sortedTrips.filter((trip) => trip.status === 'passed');

  return (
    <div className="dashboard">
      <HeaderConnected />
      <h2>MES VOYAGES</h2>
      <Link to="/createtrip">
        <IconButton textContent="Créer un voyage" icon="add" />
      </Link>
      <div className="list">
        <div className="now">
          <p className="when">J'y suis actuellement</p>
          <div className="cardList">
            {currentTrips.map((trip) => (
              <TravelCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
        <div className="future">
          <p className="when">C'est pour bientôt</p>
          <div className="cardList">
            {futureTrips.map((trip) => (
              <TravelCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
        <div className="passed">
          <p className="when">J'y suis allé.e</p>
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
