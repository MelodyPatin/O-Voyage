import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../SimpleButton/SimpleButton';
import { useDispatch, useSelector } from 'react-redux';
import { handleStepNext } from '../../../actions/trip';
import { updateActivityCities } from '../../../actions/activity';
import MultipleSelector from '../MultipleSelector/MultipleSelector';

// Functional component : popup with input fields and a close button
const StepInputSelector = ({
  buttonContent,
  placeholderInputContent,
  placeholderSelectorContent,
  labelContent,
  valueInputContent,
  options,
  city,
  name,
  changeField,
}) => {
  const dispatch = useDispatch();

  const handleSelectionChange = (selected) => {
    // Convertir chaque élément de selected en un objet { key, value }
    const newSelected = selected
      .map((selectedCityName) => {
        // Trouver l'objet dans options qui correspond à ce nom de pays
        const selectedCity = options.find(
          (city) => city.value === selectedCityName
        );

        // Vérifier si un pays correspondant a été trouvé
        if (selectedCity) {
          // Retourner un objet avec les clés et valeurs appropriées
          return { key: selectedCity.key, value: selectedCity.value };
        } else {
          // Gérer le cas où aucun pays correspondant n'a été trouvé
          console.error(
            `Aucun pays correspondant trouvé pour la valeur sélectionnée: ${selectedCityName}`
          );
          // Retourner null pour indiquer un problème
          return null;
        }
      })
      .filter(Boolean); // Filtrer les éléments nuls (cas où aucun pays correspondant n'a été trouvé)

    // Dispatch de l'action pour mettre à jour les villes sélectionnées
    dispatch(updateActivityCities(newSelected));
  };

  const handleClick = () => {
    dispatch(handleStepNext());
  };

  const selected = useSelector((state) => state.trip.selectedCities);

  return (
    <div className="StepInputSelector">
      <LabelInput
        label={labelContent}
        className="label-input"
        placeholder={placeholderInputContent}
        value={valueInputContent}
        name={name}
        type="text"
        onChange={changeField}
      />
      <MultipleSelector
        className="selector"
        placeholderContent={placeholderSelectorContent}
        options={options}
        selected={selected.value}
        onChange={handleSelectionChange}
      />
      <SimpleButton textContent={buttonContent} onClick={handleClick} />
    </div>
  );
};

StepInputSelector.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholderInputContent: PropTypes.string,
  placeholderSelectorContent: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  valueInputContent: PropTypes.string,
  city: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StepInputSelector;
