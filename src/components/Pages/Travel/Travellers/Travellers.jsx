import React from 'react';
import './Travellers.scss';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import TravelsMenu from '../../../Reusable/TravelsMenu/TravelsMenu';

const Travellers = () => {
  return (
    <div>
      <HeaderConnected onDesktop={false} />
      <div className="container">
        <TravelsMenu />
      </div>
    </div>
  );
};

export default Travellers;