import React from 'react';
import { useMediaQuery } from '@mui/material';
import './TravelAddUpdate.scss';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import StepInput from '../../../Reusable/Step/StepInput';
import StepSelect from '../../../Reusable/Step/StepSelect';
import StepTextarea from '../../../Reusable/Step/StepTextarea';
import StepFolder from '../../../Reusable/Step/StepFolder';
import StepCalendar from '../../../Reusable/Step/StepCalendar';
import ProgressBar from '../../ProgressBar/ProgressBar';
import PopupUpdate from '../../../Reusable/Popups/PopupUpdate';

const TravelAdd = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const step = 1;

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
              placeholderContent="Week-end à Paris avec les amis"
              labelContent="Donnez un titre à votre voyage*"
            />
          }
        />
      )}
      {step === 2 && (
        <PopupUpdate
          textContent={
            <StepSelect
              buttonContent="Continuer"
              placeholderContent="France"
              labelContent="Sélectionnez un/des pays*"
              options={options}
            />
          }
        />
      )}
      {step === 3 && (
        <PopupUpdate
          textContent={
            <StepSelect
              buttonContent="Continuer"
              placeholderContent="Paris"
              labelContent="Sélectionnez une/des villes*"
              options={options}
            />
          }
        />
      )}
      {step === 4 && (
        <PopupUpdate
          textContent={
            <StepCalendar
              buttonContent="Valider"
              labelContent="Ajoutez les dates *"
            />
          }
        />
      )}
      {step === 5 && (
        <PopupUpdate
          textContent={
            <StepTextarea
              textareaContent={"Voyage surprise pour l'anniversaire de Jessie"}
              buttonContent="Continuer"
              labelContent="Ajoutez une description"
            />
          }
        />
      )}
      {step === 6 && (
        <PopupUpdate
          textContent={
            <StepSelect
              buttonContent="Continuer"
              placeholderContent="Rechercher dans les amis"
              labelContent="Ajoutez un/des voyageurs*"
              options={options}
            />
          }
        />
      )}
      {step === 7 && (
        <PopupUpdate
          textContent={
            <StepFolder
              buttonContent="Créer le voyage"
              labelContent="Ajoutez une image de couverture"
            />
          }
        />
      )}
    </>
  ) : (
    <div className="TravelAddUpdate">
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
          options={options}
        />
      )}
      {step === 3 && (
        <StepSelect
          buttonContent="Continuer"
          placeholderContent="Paris"
          labelContent="Sélectionnez une/des villes*"
          options={options}
        />
      )}
      {step === 4 && (
        <StepCalendar
          buttonContent="Valider"
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
          buttonContent="Continuer"
          placeholderContent="Rechercher dans les amis"
          labelContent="Ajoutez un/des voyageurs*"
          options={options}
        />
      )}
      {step === 7 && (
        <StepFolder
          buttonContent="Créer le voyage"
          labelContent="Ajoutez une image de couverture"
        />
      )}
    </div>
  );
};

export default TravelAdd;
