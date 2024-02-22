import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Steps.scss';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../Buttons/SimpleButton';
import { handleStepNext } from '../../../actions/trip';
import { updateActivityCities } from '../../../actions/activity';
import MultipleSelector from '../MultipleSelector/MultipleSelector';
import { clearErrorMessage, setErrorMessage } from '../../../actions/user';

const StepInputSelector = ({
  buttonContent,
  placeholderInputContent,
  placeholderSelectorContent,
  labelContent,
  valueInputContent,
  options,
  name,
  changeField,
}) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.user.errorMessage);

  const handleSelectionChange = (selected) => {
    // Convertir chaque élément de selected en un objet { key, value }
    const newSelected = selected
      .map((selectedCityName) => {
        // Trouver l'objet dans options qui correspond à ce nom de ville
        const selectedCity = options.find(
          (city) => city.value === selectedCityName
        );

        // Vérifier si une ville correspondante a été trouvée
        if (selectedCity) {
          // Retourner un objet avec les clés et valeurs appropriées
          return { key: selectedCity.key, value: selectedCity.value };
        }
        // Gérer le cas où aucune ville correspondante n'a été trouvée
        console.error(
          `Aucune ville correspondante trouvée pour la valeur sélectionnée: ${selectedCityName}`
        );
        // Retourner null pour indiquer un problème
        return null;
      })
      .filter(Boolean); // Filtrer les éléments nuls (cas où aucune ville correspondante n'a été trouvée)

    // Dispatch de l'action pour mettre à jour les villes sélectionnées
    dispatch(updateActivityCities(newSelected));
  };

  const handleClick = () => {
    if (selected.length === 0) {
      dispatch(setErrorMessage("Veuillez sélectionner l'adresse et la ville."));
      return; // Arrêter la progression si aucune ville n'est sélectionnée
    }
    if (!valueInputContent.trim()) {
      dispatch(setErrorMessage('Veuillez saisir une valeur dans le champ.'));
      return; // Arrêter la progression si le champ d'entrée est vide
    }
    dispatch(handleStepNext());
    dispatch(clearErrorMessage());
  };

  const selected = useSelector((state) => state.activity.selectedCities);

  return (
    <div className="StepInputSelector">
      <div className="inputs">
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
          selected={selected.map((city) => city.value)} // Utiliser map pour obtenir un tableau de valeurs
          onChange={handleSelectionChange}
        />
      </div>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StepInputSelector;
