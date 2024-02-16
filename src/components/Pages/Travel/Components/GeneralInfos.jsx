import React from 'react';
import TravelPicture from '../../../Reusable/TravelPicture/TravelPicture';
import TravelDates from './TravelDates';
import './GeneralInfos.scss';

const GeneralInfos = () => {
  return (
    <div>
      <TravelPicture />
      <TravelDates />
    </div>
  );
};

export default GeneralInfos;
