import React from 'react';
import { useSelector } from 'react-redux';
import TravelPicture from '../../../../Reusable/TravelPicture/TravelPicture';
import TravelDates from './TravelDates';
import './GeneralInfos.scss';

const GeneralInfos = () => {
  const description = useSelector((state) => state.trip.trip.description);
  const cities = useSelector((state) => state.trip.trip.cities);

  // Check if cities is undefined
  if (!cities) {
    return null; // or any fallback UI you prefer
  }

  // Map over the cities array to extract the names
  const cityNames = cities.map(city => city.name);

  // Join the city names into a single string separated by commas
  const cityNamesString = cityNames.join(', ');

  return (
    <div>
      <TravelPicture />
      <TravelDates />
      <div className='description'>{description}</div>
      <div className='city-names'>{cityNamesString}</div>
    </div>
  );
};

export default GeneralInfos;
