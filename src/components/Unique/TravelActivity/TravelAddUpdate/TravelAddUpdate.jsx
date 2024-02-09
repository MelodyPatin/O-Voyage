import React from 'react';
import './TravelAddUpdate.scss';
import PropTypes from 'prop-types';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import StepInput from '../../../Reusable/Step/StepInput';
import StepSelect from '../../../Reusable/Step/StepSelect';
import StepTextarea from '../../../Reusable/Step/StepTextarea';
import StepFolder from '../../../Reusable/Step/StepFolder';

const TravelAddUpdate = ({ contentReturnTitle }) => {
  const step = 4;

  const options = [
    { key: 'option1', text: 'Option 1', value: 'Option 1' },
    { key: 'option2', text: 'Option 2', value: 'Option 2' },
    { key: 'option3', text: 'Option 3', value: 'Option 3' },
  ];

  return (
    <div className="TravelAddUpdate">
      <NavBarHeader isLogged={true} onDesktop={false} />
      <ReturnTitle textContent={contentReturnTitle} avatar={false} />
      {step === 1 && (
        <StepInput
          buttonContent="Continuer"
          placeholderContent="Coucou"
          labelContent="Donnez un titre à votre voyage*"
        />
      )}
      {step === 2 && (
        <StepSelect
          buttonContent="Continuer"
          placeholderContent="Pays"
          labelContent="Sélectionnez un/des pays*"
          options={options}
        />
      )}
      {step === 3 && (
        <StepSelect
          buttonContent="Continuer"
          placeholderContent="Villes"
          labelContent="Sélectionnez une/des villes*"
          options={options}
        />
      )}
      {step === 4 && (
        <StepCalendar
          buttonContent="Valider"
          placeholderContent="Coucou"
          labelContent="toto"
        />
      )}
      {step === 5 && (
        <StepTextarea
          textareaContent={'Description à propos du voyage'}
          buttonContent="Continuer"
          placeholderContent="Coucou"
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
          buttonContent="Valider"
          labelContent="Ajoutez une image de couverture"
        />
      )}
    </div>
  );
};

TravelAddUpdate.propTypes = {
  contentReturnTitle: PropTypes.string.isRequired,
};

export default TravelAddUpdate;
