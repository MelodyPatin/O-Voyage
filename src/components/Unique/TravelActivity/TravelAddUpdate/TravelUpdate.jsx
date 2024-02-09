import React from 'react';
import './TravelAddUpdate.scss';
import PropTypes from 'prop-types';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import StepInput from '../../../Reusable/Step/StepInput';
import StepSelect from '../../../Reusable/Step/StepSelect';
import StepTextarea from '../../../Reusable/Step/StepTextarea';
import StepFolder from '../../../Reusable/Step/StepFolder';
import StepCalendar from '../../../Reusable/Step/StepCalendar';
import ProgressBar from '../../ProgressBar/ProgressBar';

const TravelUpdate = ({ contentReturnTitle, tripTitle, tripCountries, tripCities, tripDates, tripDescription, tripTravelers, tripPicture}) => {
  const step = 7;

  const options = [
    { key: 'option1', text: 'Option 1', value: 'Option 1' },
    { key: 'option2', text: 'Option 2', value: 'Option 2' },
    { key: 'option3', text: 'Option 3', value: 'Option 3' },
  ];

  return (
    <div className="TravelAddUpdate">
      <NavBarHeader isLogged={true} onDesktop={false} />
      <ReturnTitle textContent={contentReturnTitle} avatar={false} />
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
          valueContent="France"
          labelContent="Sélectionnez un/des pays*"
          options={options}
          tripCountries={tripCountries}
        />
      )}
      {step === 3 && (
        <StepSelect
          buttonContent="Continuer"
          valueContent="Paris"
          labelContent="Sélectionnez une/des villes*"
          options={options}
          tripCities={tripCities}
        />
      )}
      {step === 4 && (
        <StepCalendar
          buttonContent="Valider"
          labelContent="Modifiez les dates *"
          tripDates={tripDates}
        />
      )}
      {step === 5 && (
        <StepTextarea
          textareaContent={"Voyage surprise pour l'anniversaire de Jessie"}
          buttonContent="Continuer"
          valueContent={tripDescription}
          labelContent="Modifiez la description"
        />
      )}
      {step === 6 && (
        <StepSelect
          buttonContent="Continuer"
          valueContent="Rechercher dans les amis"
          labelContent="Ajoutez un/des voyageurs*"
          options={options}
          tripTravelers={tripTravelers}
        />
      )}
      {step === 7 && (
        <StepFolder
          buttonContent="Valider"
          labelContent="Modifiez l'image de couverture"
          tripPicture={tripPicture}
        />
      )}
    </div>
  );
};

TravelUpdate.propTypes = {
  contentReturnTitle: PropTypes.string.isRequired,
};

export default TravelUpdate;
