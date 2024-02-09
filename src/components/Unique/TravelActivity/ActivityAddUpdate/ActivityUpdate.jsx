import React from 'react';
import './ActivityAddUpdate.scss';
import PropTypes from 'prop-types';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import StepInput from '../../../Reusable/Step/StepInput';
import StepSelect from '../../../Reusable/Step/StepSelect';
import StepTextarea from '../../../Reusable/Step/StepTextarea';
import StepFolder from '../../../Reusable/Step/StepFolder';
import StepCalendar from '../../../Reusable/Step/StepCalendar';
import ProgressBar from '../../ProgressBar/ProgressBar';
import StepTag from '../../../Reusable/Step/StepTag';

const ActivityUpdate = ({ activityTitle, activityAddress, activityCost, activityDates, activityUrl, activityDescription, activityTag}) => {
  const step = 7;

  const options = [
    { key: 'option1', text: 'Option 1', value: 'Option 1' },
    { key: 'option2', text: 'Option 2', value: 'Option 2' },
    { key: 'option3', text: 'Option 3', value: 'Option 3' },
  ];

  return (
    <div className="ActivityAddUpdate">
      <NavBarHeader isLogged={true} onDesktop={false} />
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
        <StepInput
          buttonContent="Continuer"
          valueContent={activityAddress}
          labelContent="Modifiez l'adresse"
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
 // activityTitle: PropTypes.string.isRequired,
 // activityAddress: PropTypes.string.isRequired,
 // activityCost: PropTypes.string.isRequired,
 // activityDates: PropTypes.string.isRequired,
 activityUrl: PropTypes.string.isRequired,
 // activityDescription: PropTypes.string.isRequired,
 // activityTag: PropTypes.string.isRequired,
};

export default ActivityUpdate;
