import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import SimpleButton from '../Buttons/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedCities } from '../../../actions/trip';
import { clearErrorMessage, setErrorMessage } from '../../../actions/user';

const StepSelectCities = ({
  buttonContent,
  placeholderContent,
  labelContent,
  options,
  handleClick,
}) => {
  const dispatch = useDispatch();

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
        } else {
          // Gérer le cas où aucune ville correspondante n'a été trouvée
          console.error(
            `Aucune ville correspondante trouvée pour la valeur sélectionnée: ${selectedCityName}`
          );
          // Retourner null pour indiquer un problème
          return null;
        }
      })
      .filter(Boolean); // Filtrer les éléments nuls (cas où aucune ville correspondante n'a été trouvée)

    // Dispatch de l'action pour mettre à jour les villes sélectionnées
    dispatch(updateSelectedCities(newSelected));
  };

  const selectedCities = useSelector((state) => state.trip.selectedCities);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  const handleStepClick = (e) => {
    e.preventDefault();
    if (selectedCities.length === 0) {
      dispatch(setErrorMessage('Veuillez sélectionner au moins une ville.'));
      return; // Arrêter la suite si aucune ville n'est sélectionnée
    }

    // Si des villes sont sélectionnées, passer à l'étape suivante
    handleClick();
    dispatch(clearErrorMessage());
  };

  return (
    <div className="StepSelect">
      <form autoComplete="off">
        <div className="LabelInput">
          <p>{labelContent}</p>
          <MultipleSelector
            placeholderContent={placeholderContent}
            options={options}
            selected={selectedCities.map((city) => city.value)} // Utiliser map pour obtenir un tableau de valeurs
            onChange={handleSelectionChange}
          />
        </div>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <SimpleButton textContent={buttonContent} onClick={handleStepClick} />
      </form>
    </div>
  );
};

StepSelectCities.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  placeholderContent: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StepSelectCities;
