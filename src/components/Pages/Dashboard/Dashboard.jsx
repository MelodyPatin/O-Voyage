import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Dashboard.scss';
import HeaderConnected from '../../Reusable/HeaderConnected/HeaderConnected';
import IconButton from '../../Reusable/IconButton/IconButton';
import TravelCard from '../../Reusable/TravelCard/TravelCard';
import Footer from '../../Reusable/Footer/Footer';

const Dashboard = () => {
  const trips = useSelector((state) => state.trip.myTrips);

  // Ajouter une propriété 'status' aux voyages
  const tripsWithStatus = trips.map((trip) => {
    const startDate = new Date(trip.startDate);
    const currentDate = new Date();

    if (startDate > currentDate) {
      return { ...trip, status: 'future' };
    }
    if (startDate < currentDate) {
      return { ...trip, status: 'passed' };
    }
    return { ...trip, status: 'current' };
  });

  // Trier les voyages par date de début
  const sortedTrips = tripsWithStatus.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  // Séparer les voyages en cours, futurs et passés
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
          {/* Afficher les voyages en cours */}
          {currentTrips.map((trip) => (
            <TravelCard key={trip.id} trip={trip} title={trip.name} />
          ))}
        </div>
        <div className="future">
          <p className="when">C'est pour bientôt</p>
          {/* Afficher les voyages futurs */}
          <div className="cardList">
            {futureTrips.map((trip) => (
              <TravelCard key={trip.id} trip={trip} title={trip.name} />
            ))}
          </div>
        </div>
        <div className="passed">
          <p className="when">J'y suis allé.e</p>
          <div className="cardList">
            {/* Afficher les voyages passés */}
            {passedTrips.map((trip) => (
              <TravelCard key={trip.id} trip={trip} title={trip.name} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
