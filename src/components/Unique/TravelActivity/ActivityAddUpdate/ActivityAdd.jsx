import React from 'react';
import { useSelector } from 'react-redux';
import './ActivityAddUpdate.scss';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import StepInput from '../../../Reusable/Step/StepInput';
import StepTextarea from '../../../Reusable/Step/StepTextarea';
import ProgressBar from '../../ProgressBar/ProgressBar';
import StepTag from '../../../Reusable/Step/StepTag';
import StepInputSelector from '../../../Reusable/Step/StepInputSelector';
import ReturnTitleStep from '../../../Reusable/ReturnTitle/ReturnTitleStep';

const ActivityAdd = () => {
  const step = useSelector((state) => state.trip.step);

  const options = [
    { key: 'option1', text: 'Option 1', value: 'Option 1' },
    { key: 'option2', text: 'Option 2', value: 'Option 2' },
    { key: 'option3', text: 'Option 3', value: 'Option 3' },
  ];

  return (
    <div className="addActivity">
      <NavBarHeader />
      {step === 1 && (
        <div className="addActivity">
          <ReturnTitle textContent="Proposition" />
          <ProgressBar step={step} />
          <StepInput
            buttonContent="Continuer"
            placeholderContent="Week-end à Paris avec les amis"
            labelContent="Donnez un titre à votre proposition*"
          />
        </div>
      )}
      {step === 2 && (
        <div className="addActivity">
          <ReturnTitleStep textContent="Proposition" />
          <ProgressBar step={step} />
          <StepInputSelector
            buttonContent="Continuer"
            placeholderInputContent="Place George Pompidou, 75004 Paris"
            placeholderSelectorContent="Sélectionnez la ville"
            labelContent="Renseignez l'adresse"
            options={options}
          />
        </div>
      )}
      {step === 3 && (
        <div className="addActivity">
          <ReturnTitleStep textContent="Proposition" />
          <ProgressBar step={step} />
          <StepInput
            buttonContent="Continuer"
            placeholderContent="15€"
            labelContent="Renseignez le coût moyen"
          />
        </div>
      )}
      {step === 4 && (
        <div className="addActivity">
          <ReturnTitleStep textContent="Proposition" />
          <ProgressBar step={step} />
          <StepTextarea
            textareaContent="11h-21h / Fermé le mardi"
            buttonContent="Continuer"
            labelContent="Renseignez les jours et horaires d'ouverture"
          />
        </div>
      )}
      {step === 5 && (
        <div className="addActivity">
          <ReturnTitleStep textContent="Proposition" />
          <ProgressBar step={step} />
          <StepInput
            buttonContent="Continuer"
            placeholderContent="https://www.centrepompidou.fr"
            labelContent="Renseignez le site internet"
          />
        </div>
      )}
      {step === 6 && (
        <div className="addActivity">
          <ReturnTitleStep textContent="Proposition" />
          <ProgressBar step={step} />
          <StepTextarea
            textareaContent="La collection permanente est impressionnante !"
            buttonContent="Continuer"
            labelContent="Ajoutez une description"
          />
        </div>
      )}
      {step === 7 && (
        <div className="addActivity">
          <ReturnTitleStep textContent="Proposition" />
          <ProgressBar step={step} />
          <StepTag
            buttonContent="Envoyer ma proposition"
            labelContent="Sélectionnez un tag"
          />
        </div>
      )}
    </div>
  );
};

export default ActivityAdd;
