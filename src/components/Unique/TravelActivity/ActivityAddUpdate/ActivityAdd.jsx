import React from 'react';
import './ActivityAddUpdate.scss';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import StepInput from '../../../Reusable/Step/StepInput';
import StepSelect from '../../../Reusable/Step/StepSelect';
import StepTextarea from '../../../Reusable/Step/StepTextarea';
import StepFolder from '../../../Reusable/Step/StepFolder';
import StepCalendar from '../../../Reusable/Step/StepCalendar';
import ProgressBar from '../../ProgressBar/ProgressBar';
import StepTag from '../../../Reusable/Step/StepTag';
import StepInputSelector from '../../../Reusable/Step/StepInputSelector';
import PropTypes from 'prop-types';
import PopupUpdate from '../../../Reusable/Popups/PopupUpdate';

const ActivityAdd = ({ onDesktop }) => {
  const step = 4; 

  const options = [
    { key: 'option1', text: 'Option 1', value: 'Option 1' },
    { key: 'option2', text: 'Option 2', value: 'Option 2' },
    { key: 'option3', text: 'Option 3', value: 'Option 3' },
  ];

  return onDesktop ? (
    <>
      {step === 1 && (
        <PopupUpdate textContent={
          <StepInput
            buttonContent="Continuer"
            placeholderContent="Week-end à Paris avec les amis"
            labelContent="Donnez un titre à votre proposition*"
          />
        } />
      )}
      {step === 2 && (
        <PopupUpdate textContent={
          <StepInputSelector
            buttonContent="Continuer"
            placeholderInputContent="Place George Pompidou, 75004 Paris"
            placeholderSelectorContent="Sélectionnez la ville"
            labelContent="Renseignez l'adresse"
            options={options}
          />
        } />
      )}
      {step === 3 && (
        <PopupUpdate textContent={
          <StepInput
            buttonContent="Continuer"
            placeholderContent="15€"
            labelContent="Renseignez le coût moyen"
          />
        } />
      )}
      {step === 4 && (
        <PopupUpdate textContent={
          <StepTextarea
            textareaContent={"11h-21h / Fermé le mardi"}
            buttonContent="Continuer"
            labelContent="Renseignez les jours et horaires d'ouverture"
          />
        } />
      )}
      {step === 5 && (
        <PopupUpdate textContent={
          <StepInput
            buttonContent="Continuer"
            placeholderContent="https://www.centrepompidou.fr"
            labelContent="Renseignez le site internet"
          />
        } />
      )}
      {step === 6 && (
        <PopupUpdate textContent={
          <StepTextarea
            textareaContent={"La collection permanente est impressionnante !"}
            buttonContent="Continuer"
            labelContent="Ajoutez une description"
          />
        } />
      )}
      {step === 7 && (
        <PopupUpdate textContent={
          <StepTag
            buttonContent="Envoyer ma proposition"
            labelContent="Sélectionnez un tag"
          />
        } />
      )}
    </>
  ) : (
    <div className="ActivityAddUpdate">
      <NavBarHeader isLogged={true} onDesktop={false} />
      <ReturnTitle textContent="Proposition" avatar={false} />
      <ProgressBar step={step} />
      {step === 1 && (
        <StepInput
          buttonContent="Continuer"
          placeholderContent="Week-end à Paris avec les amis"
          labelContent="Donnez un titre à votre proposition*"
        />
      )}
      {step === 2 && (
        <StepInputSelector
          buttonContent="Continuer"
          placeholderInputContent="Place George Pompidou, 75004 Paris"
          placeholderSelectorContent="Sélectionnez la ville"
          labelContent="Renseignez l'adresse"
          options={options}
        />
      )}
      {step === 3 && (
        <StepInput
          buttonContent="Continuer"
          placeholderContent="15€"
          labelContent="Renseignez le coût moyen"
        />
      )}
      {step === 4 && (
        <StepTextarea
          textareaContent={"11h-21h / Fermé le mardi"}
          buttonContent="Continuer"
          labelContent="Renseignez les jours et horaires d'ouverture"
        />
      )}
      {step === 5 && (
        <StepInput
          buttonContent="Continuer"
          placeholderContent="https://www.centrepompidou.fr"
          labelContent="Renseignez le site internet"
        />
      )}
      {step === 6 && (
        <StepTextarea
          textareaContent={"La collection permanente est impressionnante !"}
          buttonContent="Continuer"
          labelContent="Ajoutez une description"
        />
      )}
      {step === 7 && (
        <StepTag
          buttonContent="Envoyer ma proposition"
          labelContent="Sélectionnez un tag"
        />
      )}
    </div>
  );
};

ActivityAdd.propTypes = {
  onDesktop: PropTypes.bool.isRequired,
};

export default ActivityAdd;
