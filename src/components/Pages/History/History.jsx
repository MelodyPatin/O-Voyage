import React, { useEffect } from 'react';
import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../Reusable/ReturnTitle/ReturnTitle';
import Footer from '../../Reusable/Footer/Footer';
import './History.scss';
import ContentHistory from './components/ContentHistory';

const History = () => {

  return (
    <div className="history">
      <NavBarHeader />
      <ReturnTitle textContent="Notre Histoire" />
      <ContentHistory />
      <Footer />
    </div>
  );
};

export default History;
