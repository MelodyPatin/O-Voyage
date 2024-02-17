import React from 'react';
import { useSelector } from 'react-redux';
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
import ReturnTitleStep from '../../../Reusable/ReturnTitle/ReturnTitleStep';

const ActivityUpdate = ({
  onDesktop,
  activityTitle,
  activityAddress,
  activityCost,
  activityDates,
  activityUrl,
  activityDescription,
  activityTag,
}) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const step = useSelector((state) => state.trip.step);

  const options = [
    { key: 'option1', text: 'Option 1', value: 'Option 1' },
    { key: 'option2', text: 'Option 2', value: 'Option 2' },
    { key: 'option3', text: 'Option 3', value: 'Option 3' },
  ];

  return (
    <div className="updateActivity">
      <NavBarHeader />
      {step === 1 && (
        <div className="updateActivity">
          <ReturnTitle textContent="Modifier la proposition" />
          <ProgressBar step={step} />
          <StepInput
            buttonContent="Continuer"
            valueContent={activityTitle}
            labelContent="Modifiez le titre de votre proposition*"
          />
        </div>
      )}
      {step === 2 && (
        <div className="updateActivity">
          <ReturnTitleStep textContent="Modifier la proposition" />
          <ProgressBar step={step} />
          <StepInputSelector
            buttonContent="Continuer"
            valueContent={activityAddress}
            labelContent="Modifiez l'adresse"
            options={options}
          />
        </div>
      )}
      {step === 3 && (
        <div className="updateActivity">
          <ReturnTitleStep textContent="Modifier la proposition" />
          <ProgressBar step={step} />
          <StepInput
            buttonContent="Continuer"
            valueContent={activityCost}
            labelContent="Renseignez le coût moyen"
          />
        </div>
      )}
      {step === 4 && (
        <div className="updateActivity">
          <ReturnTitleStep textContent="Modifier la proposition" />
          <ProgressBar step={step} />
          <StepTextarea
            valueContent={activityDates}
            buttonContent="Continuer"
            labelContent="Renseignez les jours et horaires d'ouverture"
          />
        </div>
      )}
      {step === 5 && (
        <div className="updateActivity">
          <ReturnTitleStep textContent="Modifier la proposition" />
          <ProgressBar step={step} />
          <StepInput
            buttonContent="Continuer"
            valueContent={activityUrl}
            labelContent="Renseignez le site internet"
          />
        </div>
      )}
      {step === 6 && (
        <div className="updateActivity">
          <ReturnTitleStep textContent="Modifier la proposition" />
          <ProgressBar step={step} />
          <StepTextarea
            valueContent={activityDescription}
            buttonContent="Continuer"
            labelContent="Ajoutez une description"
          />
        </div>
      )}
      {step === 7 && (
        <div className="updateActivity">
          <ReturnTitleStep textContent="Modifier la proposition" />
          <ProgressBar step={step} />
          <StepTag
            buttonContent="Envoyer ma proposition"
            labelContent="Sélectionnez un tag"
            activityTag={activityTag}
          />
        </div>
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
