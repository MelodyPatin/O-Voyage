import React from 'react';
import './TravelAddUpdate.scss';
import { useSelector, useDispatch } from 'react-redux';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import ReturnTitleStep from '../../../Reusable/ReturnTitle/ReturnTitleStep';
import StepInput from '../../../Reusable/Step/StepInput';
import StepSelect from '../../../Reusable/Step/StepSelect';
import StepTextarea from '../../../Reusable/Step/StepTextarea';
import StepCalendar from '../../../Reusable/Step/StepCalendar';
import ProgressBar from '../../ProgressBar/ProgressBar';
import { changeTripField, handleStepNext } from '../../../../actions/trip';

const TravelUpdate = () => {
  const dispatch = useDispatch();

  const step = useSelector((state) => state.trip.step);
  const tripTitle = useSelector((state) => state.trip.tripTitle);
  const tripCountries = useSelector((state) => state.trip.tripCountries);
  const tripCities = useSelector((state) => state.trip.tripCities);
  const tripDates = useSelector((state) => state.trip.tripDates);
  const tripDescription = useSelector((state) => state.trip.tripDescription);
  const tripTravelers = useSelector((state) => state.trip.tripTravelers);

  const options = [
    { key: 'option1', text: 'Option 1', value: 'Option 1' },
    { key: 'option2', text: 'Option 2', value: 'Option 2' },
    { key: 'option3', text: 'Option 3', value: 'Option 3' },
  ];

  const handleNextStep = () => {
    dispatch(handleStepNext());
  };

  const handleClick = () => {
    handleNextStep();
  };

  return (
    <div className="updateTrip">
      <NavBarHeader />
      {step === 1 && (
        <div className="updateTrip">
          <ReturnTitle textContent="Modifier le voyage" />
          <ProgressBar step={step} />
          <StepInput
            inputValue={tripTitle}
            changeField={(newValue, identifier) => {
              const action = changeTripField(newValue, identifier);
              dispatch(action);
            }}
            buttonContent="Continuer"
            placeholderContent="Week-end à Paris avec les amis"
            labelContent="Modifiez le titre de votre voyage*"
          />
        </div>
      )}
      {step === 2 && (
        <div className="updateTrip">
          <ReturnTitleStep textContent="Modifier le voyage" />
          <ProgressBar step={step} />
          <StepSelect
            buttonContent="Continuer"
            valueContent={tripCountries}
            labelContent="Sélectionnez un/des pays*"
            options={options}
            handleClick={handleClick}
          />
        </div>
      )}
      {step === 3 && (
        <div className="updateTrip">
          <ReturnTitleStep textContent="Modifier le voyage" />
          <ProgressBar step={step} />
          <StepSelect
            buttonContent="Continuer"
            valueContent={tripCities}
            labelContent="Sélectionnez une/des villes*"
            options={options}
            handleClick={handleClick}
          />
        </div>
      )}
      {step === 4 && (
        <div className="updateTrip">
          <ReturnTitleStep textContent="Modifier le voyage" />
          <ProgressBar step={step} />
          <StepCalendar
            buttonContent="Valider"
            labelContent="Ajoutez les dates *"
            tripDates={tripDates}
          />
        </div>
      )}
      {step === 5 && (
        <div className="updateTrip">
          <ReturnTitleStep textContent="Modifier le voyage" />
          <ProgressBar step={step} />
          <StepTextarea
            inputValue={tripDescription}
            changeField={(newValue, identifier) => {
              const action = changeTripField(newValue, identifier);
              dispatch(action);
            }}
            placeholderContent={"Voyage surprise pour l'anniversaire de Jessie"}
            buttonContent="Continuer"
            labelContent="Modifiez la description"
          />
        </div>
      )}
      {step === 6 && (
        <div className="updateTrip">
          <ReturnTitleStep textContent="Modifier le voyage" />
          <ProgressBar step={step} />
          <StepSelect
            buttonContent="Continuer"
            valueContent={tripTravelers}
            labelContent="Ajoutez un/des voyageurs*"
            options={options}
            handleClick={handleClick}
          />
        </div>
      )}
    </div>
  );
};

export default TravelUpdate;
