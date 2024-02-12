import React from 'react';
import TravelPicture from '../../../Reusable/TravelPicture/TravelPicture';
import TravelDates from './TravelDates';

const GeneralInfos = () => {
  return (
    <div>
      <TravelPicture />
      <TravelDates
        DepartureDate="28 décembre 2023"
        ReturnDate="5 janvier 2024"
      />
    </div>
  );
};

export default GeneralInfos;