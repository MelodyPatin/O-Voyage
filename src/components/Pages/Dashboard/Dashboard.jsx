import React from 'react';
import './Dashboard.scss'
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import HeaderConnected from '../../Reusable/HeaderConnected/HeaderConnected';
import IconButton from '../../Reusable/IconButton/IconButton';
import TravelCard from '../../Reusable/TravelCard/TravelCard';
import Footer from '../../Reusable/Footer/Footer';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <HeaderConnected />
      <h2>
        <ArrowLeftIcon className="arrow" />
        MES VOYAGES
      </h2>
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
            <TravelCard title='Thailande' />
            <TravelCard title='Vietnam' />
          </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
