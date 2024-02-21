import React, { useEffect } from 'react';
import './TravelAddUpdate.scss';
import { useSelector, useDispatch } from 'react-redux';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import ReturnTitleStep from '../../../Reusable/ReturnTitle/ReturnTitleStep';
import StepInput from '../../../Reusable/Step/StepInput';
import StepSelect from '../../../Reusable/Step/StepSelect';
import StepTextarea from '../../../Reusable/Step/StepTextarea';
import {
  changeTripField,
  fetchATripToUpdate,
  fetchCountries,
  handleStepNext,
} from '../../../../actions/trip';
import { useParams } from 'react-router-dom';
import StepSelectCountries from '../../../Reusable/Step/StepSelectCountries';
import StepSelectCities from '../../../Reusable/Step/StepSelectCities';
import ProgressBarTravel from '../../ProgressBar/ProgressBarTravel';
import StepSelectTravelersUpdate from '../../../Reusable/Step/StepSelectTravelersUpdate';
import StepCalendarUpdate from '../../../Reusable/Step/StepCalendarUpdate';

const TravelUpdate = () => {
  const dispatch = useDispatch();
  const { tripId } = useParams();

  useEffect(() => {
    dispatch(fetchATripToUpdate(tripId));
    dispatch(fetchCountries());
  }, [dispatch, tripId]);

  const step = useSelector((state) => state.trip.step);
  const tripTitle = useSelector((state) => state.trip.tripTitle);
  const tripDescription = useSelector((state) => state.trip.tripDescription);
  const countries = useSelector((state) => state.trip.countries);
  const cities = useSelector((state) => state.trip.cities);
  const selectedCities = useSelector((state) => state.trip.cities);
  const friends = useSelector((state) => state.user.friends);
  const startDate = useSelector((state) => state.trip.startDate);
  const endDate = useSelector((state) => state.trip.endDate);

  const countriesOptions = countries.map((country) => ({
    key: country.id,
    text: country.name,
    value: country.name,
  }));

  const citiesOptions = cities.map((city) => ({
    key: city.id,
    text: city.name,
    value: city.name,
  }));

  const friendsOptions = friends.map((friend) => ({
    key: friend.id,
    text: `${friend.firstname} ${friend.lastname}`,
    value: `${friend.firstname} ${friend.lastname}`,
  }));

  const handleClick = () => {
    dispatch(handleStepNext());
  };

  return (
    <div className="updateTrip">
      <NavBarHeader />
      {step === 1 && (
        <div className="updateTrip">
          <ReturnTitle textContent="Modifier le voyage" />
          <ProgressBarTravel step={step} />
          <StepInput
            inputValue={tripTitle}
            changeField={(newValue, identifier) => {
              const action = changeTripField(newValue, identifier);
              dispatch(action);
            }}
            name="tripTitle"
            buttonContent="Continuer"
            placeholderContent="Week-end à Paris avec les amis"
            labelContent="Modifiez le titre du voyage*"
          />
        </div>
      )}
      {step === 2 && (
        <div className="updateTrip">
          <ReturnTitleStep textContent="Modifier le voyage" />
          <ProgressBarTravel step={step} />
          <StepSelectCountries
            buttonContent="Continuer"
            placeholderContent="France"
            labelContent="Modifiez le/les pays*"
            options={countriesOptions}
            handleClick={handleClick}
          />
        </div>
      )}
      {step === 3 && (
        <div className="updateTrip">
          <ReturnTitleStep textContent="Modifier le voyage" />
          <ProgressBarTravel step={step} />
          <StepSelectCities
            buttonContent="Continuer"
            placeholderContent="Paris"
            labelContent="Modifiez la/les villes*"
            options={citiesOptions}
            handleClick={handleClick}
          />
        </div>
      )}
      {step === 4 && (
        <div className="updateTrip">
          <ReturnTitleStep textContent="Modifier le voyage" />
          <ProgressBarTravel step={step} />
          <StepCalendarUpdate
            buttonContent="Continuer"
            labelContent="Modifiez les dates *"
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      )}
      {step === 5 && (
        <div className="updateTrip">
          <ReturnTitleStep textContent="Modifier le voyage" />
          <ProgressBarTravel step={step} />
          <StepTextarea
            inputValue={tripDescription}
            changeField={(newValue, identifier) => {
              const action = changeTripField(newValue, identifier);
              dispatch(action);
            }}
            placeholderContent={"Voyage surprise pour l'anniversaire de Jessie"}
            buttonContent="Continuer"
            labelContent="Modifiez la description"
            name="tripDescription"
          />
        </div>
      )}
      {step === 6 && (
        <div className="updateTrip">
          <ReturnTitleStep textContent="Modifier le voyage" />
          <ProgressBarTravel step={step} />
          <StepSelectTravelersUpdate
            buttonContent="Modifier le voyage"
            placeholderContent="Rechercher dans les amis"
            labelContent="Modifiez les voyageurs*"
            options={friendsOptions}
            handleClick={handleClick}
          />
        </div>
      )}
    </div>
  );
};

export default TravelUpdate;
