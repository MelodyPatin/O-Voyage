import React from 'react';
import './TravelAddUpdate.scss';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import ReturnTitleStep from '../../../Reusable/ReturnTitle/ReturnTitleStep';
import StepInput from '../../../Reusable/Step/StepInput';
import StepSelect from '../../../Reusable/Step/StepSelect';
import StepTextarea from '../../../Reusable/Step/StepTextarea';
import StepCalendar from '../../../Reusable/Step/StepCalendar';
import PopupUpdate from '../../../Reusable/Popups/PopupUpdate';
import ProgressBar from '../../ProgressBar/ProgressBar';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeTripField } from '../../../../actions/trip';
import { useMediaQuery } from '@mui/material';

const TravelUpdate = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 767px)');
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

  return !isMobile ? (
    <div className="TravelAddUpdate">
      <NavBarHeader isLogged={true} onDesktop={false} />
      <ReturnTitle textContent="Modifier le voyage" avatar={false} />
      <ProgressBar step={step} />
      {step === 1 && (
        <PopupUpdate
          textContent={
            <div className="addtrip">
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
          }
        />
      )}
      {step === 2 && (
        <PopupUpdate
          textContent={
            <div className="addtrip">
              <ReturnTitleStep textContent="Modifier le voyage" />
              <ProgressBar step={step} />
              <StepSelect
                buttonContent="Continuer"
                valueContent={tripCountries}
                labelContent="Sélectionnez un/des pays*"
                options={options}
              />
            </div>
          }
        />
      )}
      {step === 3 && (
        <PopupUpdate
          textContent={
            <div className="addtrip">
              <ReturnTitleStep textContent="Modifier le voyage" />
              <ProgressBar step={step} />
              <StepSelect
                buttonContent="Continuer"
                valueContent={tripCities}
                labelContent="Sélectionnez une/des villes*"
                options={options}
              />
            </div>
          }
        />
      )}
      {step === 4 && (
        <PopupUpdate
          textContent={
            <div className="addtrip">
              <ReturnTitleStep textContent="Modifier le voyage" />
              <ProgressBar step={step} />
              <StepCalendar
                buttonContent="Valider"
                labelContent="Ajoutez les dates *"
                tripDates={tripDates}
              />
            </div>
          }
        />
      )}
      {step === 5 && (
        <PopupUpdate
          textContent={
            <div className="addtrip">
              <ReturnTitleStep textContent="Modifier le voyage" />
              <ProgressBar step={step} />
              <StepTextarea
                inputValue={tripDescription}
                changeField={(newValue, identifier) => {
                  const action = changeTripField(newValue, identifier);
                  dispatch(action);
                }}
                placeholderContent={
                  "Voyage surprise pour l'anniversaire de Jessie"
                }
                buttonContent="Continuer"
                labelContent="Modifiez la description"
              />
            </div>
          }
        />
      )}
      {step === 6 && (
        <PopupUpdate
          textContent={
            <div className="addtrip">
              <ReturnTitleStep textContent="Modifier le voyage" />
              <ProgressBar step={step} />
              <StepSelect
                buttonContent="Continuer"
                valueContent={tripTravelers}
                labelContent="Ajoutez un/des voyageurs*"
                options={options}
              />
            </div>
          }
        />
      )}
    </div>
  ) : (
    <div className="TravelAddUpdate">
      <NavBarHeader isLogged={true} onDesktop={false} />
      <ReturnTitle textContent="Modifier le voyage" avatar={false} />
      <ProgressBar step={step} />
      {step === 1 && (
        <StepInput
          buttonContent="Continuer"
          valueContent={tripTitle}
          labelContent="Modifiez le titre de votre voyage*"
        />
      )}
      {step === 2 && (
        <StepSelect
          buttonContent="Continuer"
          valueContent={tripCountries}
          labelContent="Sélectionnez un/des pays*"
          options={options}
        />
      )}
      {step === 3 && (
        <StepSelect
          buttonContent="Continuer"
          valueContent={tripCities}
          labelContent="Sélectionnez une/des villes*"
          options={options}
        />
      )}
      {step === 4 && (
        <StepCalendar
          buttonContent="Valider"
          labelContent="Ajoutez les dates *"
          tripDates={tripDates}
        />
      )}
      {step === 5 && (
        <StepTextarea
          inputValue={tripDescription}
          changeField={(newValue, identifier) => {
            const action = changeTripField(newValue, identifier);
            dispatch(action);
          }}
          placeholderContent={
            "Voyage surprise pour l'anniversaire de Jessie"
          }
          buttonContent="Continuer"
          labelContent="Modifiez la description"
        />
      )}
      {step === 6 && (
        <StepSelect
          buttonContent="Continuer"
          valueContent={tripTravelers}
          labelContent="Ajoutez un/des voyageurs*"
          options={options}
        />
      )}
    </div>
  );
};

TravelUpdate.propTypes = {
  onDesktop: PropTypes.bool.isRequired,
  tripTitle: PropTypes.string.isRequired,
  tripCountries: PropTypes.string.isRequired,
  tripCities: PropTypes.string.isRequired,
  tripDates: PropTypes.string.isRequired,
  tripDescription: PropTypes.string.isRequired,
  tripTravelers: PropTypes.string.isRequired,
  tripPicture: PropTypes.string.isRequired,
};

export default TravelUpdate;
