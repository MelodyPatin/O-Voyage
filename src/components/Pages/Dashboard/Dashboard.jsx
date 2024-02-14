import React from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.scss'
import HeaderConnected from '../../Reusable/HeaderConnected/HeaderConnected';
import IconButton from '../../Reusable/IconButton/IconButton';
import TravelCard from '../../Reusable/TravelCard/TravelCard';
import Footer from '../../Reusable/Footer/Footer';

const Dashboard = () => {
  const trips = useSelector((state) => state.trip.myTrips);

  return (
    <div className="dashboard">
      <HeaderConnected />
      <h2>MES VOYAGES</h2>
      <IconButton textContent="Créer un voyage" icon="add" />
      <div className="list">
        <div className="now">
          <p className="when">J'y suis actuellement</p>
          <TravelCard title='Paris'/>
        </div>
        <div className="future">
          <p className="when">C'est pour bientôt</p>
          <div className="cardList">
            <TravelCard title='Bordeaux' countdown={2} />
            <TravelCard title='Bordeaux' countdown={2} />
            <TravelCard title='Bordeaux' countdown={2} />
            <TravelCard title='Bordeaux' countdown={2} />
            <TravelCard title='Bordeaux' countdown={2} />
          </div>
        </div>
        <div className="passed">
          <p className="when">J'y suis allé.e</p>
          <div className="cardList">
            {trips.map((trip) => (
              <TravelCard key={trip.id} trip={trip} title={trip.name} />
            ))}
            {/* // TODO gérer la division entre passé future et current + trier par date de début : plus proche en premier */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
