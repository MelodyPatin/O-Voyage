import React from 'react';
import './ActivityAddUpdate.scss';
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import StepInput from '../../../Reusable/Step/StepInput';
import StepTextarea from '../../../Reusable/Step/StepTextarea';
import ProgressBar from '../../ProgressBar/ProgressBar';
import StepTag from '../../../Reusable/Step/StepTag';
import StepInputSelector from '../../../Reusable/Step/StepInputSelector';
import PopupUpdate from '../../../Reusable/Popups/PopupUpdate';
import { useSelector } from 'react-redux';

const ActivityUpdate = ({ onDesktop, activityTitle, activityAddress, activityCost, activityDates, activityUrl, activityDescription, activityTag}) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const step = useSelector((state) => state.trip.step);

  const options = [
    { key: 'option1', text: 'Option 1', value: 'Option 1' },
    { key: 'option2', text: 'Option 2', value: 'Option 2' },
    { key: 'option3', text: 'Option 3', value: 'Option 3' },
  ];

  return !isMobile ? (
    <>
      {step === 1 && (
        <PopupUpdate
          textContent={
            <StepInput
              buttonContent="Continuer"
              valueContent={activityTitle}
              labelContent="Modifiez le titre de votre proposition*"
            />
          }
        />
      )}
      {step === 2 && (
        <PopupUpdate
          textContent={
            <StepInputSelector
              buttonContent="Continuer"
              valueContent={activityAddress}
              labelContent="Modifiez l'adresse"
              options={options}
            />
          }
        />
      )}
      {step === 3 && (
        <PopupUpdate
          textContent={
            <StepInput
              buttonContent="Continuer"
              valueContent={activityCost}
              labelContent="Renseignez le coût moyen"
            />
          }
        />
      )}
      {step === 4 && (
        <PopupUpdate
          textContent={
            <StepTextarea
              valueContent={activityDates}
              buttonContent="Continuer"
              labelContent="Renseignez les jours et horaires d'ouverture"
            />
          }
        />
      )}
      {step === 5 && (
        <PopupUpdate
          textContent={
            <StepInput
              buttonContent="Continuer"
              valueContent={activityUrl}
              labelContent="Renseignez le site internet"
            />
          }
        />
      )}
      {step === 6 && (
        <PopupUpdate
          textContent={
            <StepTextarea
              valueContent={activityDescription}
              buttonContent="Continuer"
              labelContent="Ajoutez une description"
            />
          }
        />
      )}
      {step === 7 && (
        <PopupUpdate
          textContent={
            <StepTag
              buttonContent="Envoyer ma proposition"
              labelContent="Sélectionnez un tag"
              activityTag={activityTag}
            />
          }
        />
      )}
    </>
  ) : (
    <div className="ActivityAddUpdate">
      <NavBarHeader isLogged onDesktop={false} />
      <ReturnTitle textContent="Modifier la proposition" avatar={false} />
      <ProgressBar step={step} />
      {step === 1 && (
        <StepInput
          buttonContent="Continuer"
          valueContent={activityTitle}
          labelContent="Modifiez le titre de votre proposition*"
        />
      )}
      {step === 2 && (
        <StepInputSelector
          buttonContent="Continuer"
          valueContent={activityAddress}
          labelContent="Modifiez l'adresse"
          options={options}
        />
      )}
      {step === 3 && (
        <StepInput
          buttonContent="Continuer"
          valueContent={activityCost}
          labelContent="Renseignez le coût moyen"
        />
      )}
      {step === 4 && (
        <StepTextarea
          valueContent={activityDates}
          buttonContent="Continuer"
          labelContent="Renseignez les jours et horaires d'ouverture"
        />
      )}
      {step === 5 && (
        <StepInput
          buttonContent="Continuer"
          valueContent={activityUrl}
          labelContent="Renseignez le site internet"
        />
      )}
      {step === 6 && (
        <StepTextarea
          valueContent={activityDescription}
          buttonContent="Continuer"
          labelContent="Ajoutez une description"
        />
      )}
      {step === 7 && (
        <StepTag
          buttonContent="Envoyer ma proposition"
          labelContent="Sélectionnez un tag"
          activityTag={activityTag}
        />
      )}
    </div>
  );
};

ActivityUpdate.propTypes = {
  onDesktop: PropTypes.bool.isRequired,
  activityTitle: PropTypes.string,
  activityAddress: PropTypes.string,
  activityCost: PropTypes.string,
  activityDates: PropTypes.string,
  activityUrl: PropTypes.string,
  activityDescription: PropTypes.string,
  activityTag: PropTypes.string,
};

export default ActivityUpdate;
