import React from 'react';
import { useMediaQuery } from '@mui/material';
import './TravelAddUpdate.scss';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import ReturnTitleStep from '../../../Reusable/ReturnTitle/ReturnTitleStep';
import StepInput from '../../../Reusable/Step/StepInput';
import StepSelect from '../../../Reusable/Step/StepSelect';
import StepTextarea from '../../../Reusable/Step/StepTextarea';
import StepFolder from '../../../Reusable/Step/StepFolder';
import StepCalendar from '../../../Reusable/Step/StepCalendar';
import PopupUpdate from '../../../Reusable/Popups/PopupUpdate';
import ProgressBarTravel from '../../ProgressBar/ProgressBarTravel';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeTripField,
  handleStepNext,
  submitCreateTravel,
  updateSelectedCountries, // Importez updateSelectedCountries
  fetchCities,
} from '../../../../actions/trip';

const TravelAdd = () => {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery('(max-width: 767px)');

  const step = useSelector((state) => state.trip.step);
  const tripTitle = useSelector((state) => state.trip.tripTitle);
  const tripDescription = useSelector((state) => state.trip.tripDescription);
  const countries = useSelector((state) => state.trip.countries);
  const cities = useSelector((state) => state.trip.cities);

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

  const handleNextStep = () => {
    dispatch(handleStepNext());
  };

  const handleClick = () => {
    handleNextStep();
  };

  return !isMobile ? (
    <>
      {step === 1 && (
        <PopupUpdate
          textContent={
            <div className="addtrip">
              <ReturnTitle textContent="Ajouter un voyage" />
              <ProgressBarTravel step={step} />
              <StepInput
                inputValue={tripTitle}
                changeField={(newValue, identifier) => {
                  const action = changeTripField(newValue, identifier);
                  dispatch(action);
                }}
                buttonContent="Continuer"
                placeholderContent="Week-end à Paris avec les amis"
                labelContent="Donnez un titre à votre voyage*"
              />
            </div>
          }
        />
      )}
      {step === 2 && (
        <PopupUpdate
          textContent={
            <div className="addtrip">
              <ReturnTitleStep textContent="Ajouter un voyage" />
              <ProgressBarTravel step={step} />
              <StepSelect
                buttonContent="Continuer"
                placeholderContent="France"
                labelContent="Sélectionnez un/des pays*"
                options={countriesOptions}
                handleClick={handleClick}
              />
            </div>
          }
        />
      )}
      {step === 3 && (
        <PopupUpdate
          textContent={
            <div className="addtrip">
              <ReturnTitleStep textContent="Ajouter un voyage" />
              <ProgressBarTravel step={step} />
              <StepSelect
                buttonContent="Continuer"
                placeholderContent="Paris"
                labelContent="Sélectionnez une/des villes*"
                options={citiesOptions} // Utilisez les options des villes
                handleClick={handleClick}
              />
            </div>
          }
        />
      )}
      {step === 4 && (
        <PopupUpdate
          textContent={
            <div className="addtrip">
              <ReturnTitleStep textContent="Ajouter un voyage" />
              <ProgressBarTravel step={step} />
              <StepCalendar
                buttonContent="Continuer"
                labelContent="Ajoutez les dates *"
              />
            </div>
          }
        />
      )}
      {step === 5 && (
        <PopupUpdate
          textContent={
            <div className="addtrip">
              <ReturnTitleStep textContent="Ajouter un voyage" />
              <ProgressBarTravel step={step} />
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
                labelContent="Ajoutez une description"
              />
            </div>
          }
        />
      )}
      {step === 6 && (
        <PopupUpdate
          textContent={
            <div className="addtrip">
              <ReturnTitleStep textContent="Ajouter un voyage" />
              <ProgressBarTravel step={step} />
              <StepSelect
                buttonContent="Créer le voyage"
                placeholderContent="Rechercher dans les amis"
                labelContent="Ajoutez un/des voyageurs*"
                options={options}
                handleClick={submitCreateTravel}
              />
            </div>
          }
        />
      )}
    </>
  ) : (
    <div className="TravelAddUpdate">
      <div className="addtrip">
        <NavBarHeader />
        <ReturnTitle textContent="Ajouter un voyage" avatar={false} />
        <ProgressBar step={step} />
        {step === 1 && (
          <StepInput
            buttonContent="Continuer"
            placeholderContent="Week-end à Paris avec les amis"
            labelContent="Donnez un titre à votre voyage*"
          />
        )}
        {step === 2 && (
          <StepSelect
            buttonContent="Continuer"
            placeholderContent="France"
            labelContent="Sélectionnez un/des pays*"
            options={options.countriesOptions}
            handleClick={handleClick}
            handleSelect={handleSelectCountries}
          />
        )}
        {step === 3 && (
          <StepSelect
            buttonContent="Continuer"
            placeholderContent="Paris"
            labelContent="Sélectionnez une/des villes*"
            options={options.citiesOptions}
            handleClick={handleClick}
            handleSelect={handleSelectCities}
          />
        )}
        {step === 4 && (
          <StepCalendar
            buttonContent="Continuer"
            labelContent="Ajoutez les dates *"
          />
        )}
        {step === 5 && (
          <StepTextarea
            textareaContent={"Voyage surprise pour l'anniversaire de Jessie"}
            buttonContent="Continuer"
            labelContent="Ajoutez une description"
          />
        )}
        {step === 6 && (
          <StepSelect
            buttonContent="Créer le voyage"
            placeholderContent="Rechercher dans les amis"
            labelContent="Ajoutez un/des voyageurs*"
            options={options}
            handleClick={submitCreateTravel}
          />
        )}
      </div>
    </div>
  );
};

export default TravelAdd;
