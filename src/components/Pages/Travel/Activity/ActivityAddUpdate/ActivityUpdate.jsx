import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ActivityAddUpdate.scss';
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import NavBarHeader from '../../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../../Reusable/ReturnTitle/ReturnTitle';
import StepInput from '../../../../Reusable/Step/StepInput';
import StepTextarea from '../../../../Reusable/Step/StepTextarea';
import ProgressBar from '../../../../Reusable/ProgressBar/ProgressBar';
import StepInputSelector from '../../../../Reusable/Step/StepInputSelector';
import ReturnTitleStep from '../../../../Reusable/ReturnTitle/ReturnTitleStep';
import { useParams } from 'react-router-dom';
import {
  changeActivityField,
  fetchAnActivityToUpdate,
} from '../../../../../actions/activity';
import StepTagUpdate from '../../../../Reusable/Step/StepTagUpdate';

const ActivityUpdate = () => {
  const dispatch = useDispatch();
  const { activityId } = useParams();

  useEffect(() => {
    dispatch(fetchAnActivityToUpdate(activityId));
  }, [dispatch, activityId]);

  const isMobile = useMediaQuery('(max-width: 767px)');

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
  const cities = useSelector((state) => state.activity.selectedCities);
  const citiesOptions = cities.map((city) => ({
    key: city.key,
    text: city.value,
    value: city.value,
  }));

  return (
    <div className="updateActivity">
      <NavBarHeader />
      {step === 1 && (
        <div className="updateActivity">
          <ReturnTitle textContent="Modifier la proposition" />
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
            labelContent="Modifiez le titre*"
          />
        </div>
      )}
      {step === 2 && (
        <div className="updateActivity">
          <ReturnTitleStep textContent="Modifier la proposition" />
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
            placeholderSelectorContent="Modifiez la ville"
            labelContent="Modifiez l'adresse"
            options={citiesOptions}
          />
        </div>
      )}
      {step === 3 && (
        <div className="updateActivity">
          <ReturnTitleStep textContent="Modifier la proposition" />
          <ProgressBar step={step} />
          <StepInput
            buttonContent="Continuer"
            placeholderContent="15€"
            labelContent="Modifiez le coût moyen"
            inputValue={activityPrice}
            changeField={(newValue, identifier) => {
              const action = changeActivityField(newValue, identifier);
              dispatch(action);
            }}
            name="activityPrice"
          />
        </div>
      )}
      {step === 4 && (
        <div className="updateActivity">
          <ReturnTitleStep textContent="Modifier la proposition" />
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
            labelContent="Modifiez les jours et horaires d'ouverture"
          />
        </div>
      )}
      {step === 5 && (
        <div className="updateActivity">
          <ReturnTitleStep textContent="Modifier la proposition" />
          <ProgressBar step={step} />
          <StepInput
            buttonContent="Continuer"
            placeholderContent="https://www.centrepompidou.fr"
            labelContent="Modifiez le site internet"
            inputValue={activityUrl}
            changeField={(newValue, identifier) => {
              const action = changeActivityField(newValue, identifier);
              dispatch(action);
            }}
            name="activityUrl"
          />
        </div>
      )}
      {step === 6 && (
        <div className="updateActivity">
          <ReturnTitleStep textContent="Modifier la proposition" />
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
            labelContent="Modifiez la description"
          />
        </div>
      )}
      {step === 7 && (
        <div className="updateActivity">
          <ReturnTitleStep textContent="Modifier la proposition" />
          <ProgressBar step={step} />
          <StepTagUpdate
            buttonContent="Modifier ma proposition"
            labelContent="Modifiez le tag"
          />
        </div>
      )}
    </div>
  );
};

export default ActivityUpdate;
