import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ActivityAddUpdate.scss';

import NavBarHeader from '../../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../../Reusable/ReturnTitle/ReturnTitle';
import StepInput from '../../../../Reusable/Step/StepInput';
import StepTextarea from '../../../../Reusable/Step/StepTextarea';
import ProgressBar from '../../../../Reusable/ProgressBar/ProgressBar';
import StepTag from '../../../../Reusable/Step/StepTag';
import StepInputSelector from '../../../../Reusable/Step/StepInputSelector';
import ReturnTitleStep from '../../../../Reusable/ReturnTitle/ReturnTitleStep';

import { changeActivityField } from '../../../../../actions/activity';
import StepInputOptionnal from '../../../../Reusable/Step/StepInputOptionnal';

const ActivityAdd = () => {
  const dispatch = useDispatch();

  // Get step and activity details from the Redux store
  const step = useSelector((state) => state.trip.step);
  const activityTitle = useSelector((state) => state.activity.activityTitle);
  const activityPrice = useSelector((state) => state.activity.activityPrice);
  const activityUrl = useSelector((state) => state.activity.activityUrl);
  const activityDates = useSelector((state) => state.activity.activityDates);
  const activityAddress = useSelector(
    (state) => state.activity.activityAddress
  );
  const activityDescription = useSelector(
    (state) => state.activity.activityDescription
  );
  const activityCities = useSelector((state) => state.trip.trip.cities);

  // Options for city selector
  const activityCitiesOptions = activityCities.map((city) => ({
    key: city.id,
    text: city.name,
    value: city.name,
  }));

  return (
    <div className="addActivity">
      <NavBarHeader />

      {/* Render different steps based on the current step value */}
      {/* Step 1: Input for activity title */}
      {step === 1 && (
        <div className="addActivity">
          <ReturnTitle textContent="Proposition" />
          <ProgressBar step={step} />
          <StepInput
            inputValue={activityTitle}
            changeField={(newValue, identifier) => {
              const action = changeActivityField(newValue, identifier);
              dispatch(action);
            }}
            name="activityTitle"
            buttonContent="Continuer"
            placeholderContent="Week-end à Paris avec les amis"
            labelContent="Donnez un titre à votre proposition*"
          />
        </div>
      )}

      {/* Step 2: Input for activity address and selector for the city */}
      {step === 2 && (
        <div className="addActivity">
          <ReturnTitleStep textContent="Proposition" />
          <ProgressBar step={step} />
          <StepInputSelector
            valueInputContent={activityAddress}
            changeField={(newValue, identifier) => {
              const action = changeActivityField(newValue, identifier);
              dispatch(action);
            }}
            name="activityAddress"
            buttonContent="Continuer"
            placeholderInputContent="Place George Pompidou, 75004 Paris"
            placeholderSelectorContent="Sélectionnez la ville"
            labelContent="Renseignez l'adresse*"
            options={activityCitiesOptions}
          />
        </div>
      )}

      {/* Step 3: Input for activity cost */}
      {step === 3 && (
        <div className="addActivity">
          <ReturnTitleStep textContent="Proposition" />
          <ProgressBar step={step} />
          <StepInputOptionnal
            buttonContent="Continuer"
            placeholderContent="15€"
            labelContent="Renseignez le coût moyen"
            inputValue={activityPrice}
            changeField={(newValue, identifier) => {
              const action = changeActivityField(newValue, identifier);
              dispatch(action);
            }}
            name="activityPrice"
          />
        </div>
      )}

      {/* Step 4: Input for activity oppening days and hours */}
      {step === 4 && (
        <div className="addActivity">
          <ReturnTitleStep textContent="Proposition" />
          <ProgressBar step={step} />
          <StepTextarea
            inputValue={activityDates}
            changeField={(newValue, identifier) => {
              const action = changeActivityField(newValue, identifier);
              dispatch(action);
            }}
            name="activityDates"
            placeholderContent="11h-21h / Fermé le mardi"
            buttonContent="Continuer"
            labelContent="Renseignez les jours et horaires d'ouverture"
          />
        </div>
      )}

      {/* Step 5: Input for activity website */}
      {step === 5 && (
        <div className="addActivity">
          <ReturnTitleStep textContent="Proposition" />
          <ProgressBar step={step} />
          <StepInputOptionnal
            buttonContent="Continuer"
            placeholderContent="https://www.centrepompidou.fr"
            labelContent="Renseignez le site internet"
            inputValue={activityUrl}
            changeField={(newValue, identifier) => {
              const action = changeActivityField(newValue, identifier);
              dispatch(action);
            }}
            name="activityUrl"
          />
        </div>
      )}

      {/* Step 6: Input for activity description */}
      {step === 6 && (
        <div className="addActivity">
          <ReturnTitleStep textContent="Proposition" />
          <ProgressBar step={step} />
          <StepTextarea
            inputValue={activityDescription}
            changeField={(newValue, identifier) => {
              const action = changeActivityField(newValue, identifier);
              dispatch(action);
            }}
            name="activityDescription"
            placeholderContent="La collection permanente est impressionnante !"
            buttonContent="Continuer"
            labelContent="Ajoutez une description"
          />
        </div>
      )}

      {/* Step 7: Select for activity category */}
      {step === 7 && (
        <div className="addActivity">
          <ReturnTitleStep textContent="Proposition" />
          <ProgressBar step={step} />
          <StepTag
            buttonContent="Envoyer ma proposition"
            labelContent="Sélectionnez un tag*"
          />
        </div>
      )}
    </div>
  );
};

export default ActivityAdd;
