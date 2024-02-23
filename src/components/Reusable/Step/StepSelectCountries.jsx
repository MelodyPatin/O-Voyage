import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import SimpleButton from '../Buttons/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities, updateSelectedCountries } from '../../../actions/trip';
import { clearErrorMessage, setErrorMessage } from '../../../actions/user';

const StepSelectCountries = ({
  buttonContent,
  placeholderContent,
  labelContent,
  options,
  handleClick,
}) => {
  const dispatch = useDispatch();

  const selectedCountries = useSelector(
    (state) => state.trip.selectedCountries
  );

  const errorMessage = useSelector((state) => state.user.errorMessage);

  const handleFetchCities = () => {
    if (selectedCountries && selectedCountries.length > 0) {
      selectedCountries.map((country) => {
        dispatch(fetchCities(country.key));
      });
    } else {
      dispatch(setErrorMessage('Veuillez sélectionner au moins un pays.'));
    }
  };

  const handleSelectionChange = (selected) => {
    // Convertir chaque élément de selected en un objet { key, value }
    const newSelected = selected
      .map((selectedCountryName) => {
        // Trouver l'objet dans options qui correspond à ce nom de pays
        const selectedCountry = options.find(
          (country) => country.value === selectedCountryName
        );

        // Vérifier si un pays correspondant a été trouvé
        if (selectedCountry) {
          // Retourner un objet avec les clés et valeurs appropriées
          return { key: selectedCountry.key, value: selectedCountry.value };
        } else {
          // Gérer le cas où aucun pays correspondant n'a été trouvé
          console.error(
            `Aucun pays correspondant trouvé pour la valeur sélectionnée: ${selectedCountryName}`
          );
          // Retourner null pour indiquer un problème
          return null;
        }
      })
      .filter(Boolean); // Filtrer les éléments nuls (cas où aucun pays correspondant n'a été trouvé)

    // Dispatch de l'action pour mettre à jour les pays sélectionnés
    dispatch(updateSelectedCountries(newSelected));
  };

  const handleStepClick = (e) => {
    e.preventDefault();
    if (selectedCountries.length === 0) {
      dispatch(setErrorMessage('Veuillez sélectionner au moins un pays.'));
      return; // Arrêter la suite si aucun pays n'est sélectionné
    }

    // Si des pays sont sélectionnés, passer à l'étape suivante
    handleClick();
    handleFetchCities();
    dispatch(clearErrorMessage());
  };

  return (
    <div className="StepSelect">
      <form>
        <div className="LabelInput">
          <p>{labelContent}</p>
          <MultipleSelector
            placeholderContent={placeholderContent}
            options={options}
            selected={selectedCountries.map((country) => country.value)} // Utiliser map pour obtenir un tableau de valeurs
            onChange={handleSelectionChange}
          />
        </div>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <SimpleButton textContent={buttonContent} onClick={handleStepClick} />
      </form>
    </div>
  );
};

StepSelectCountries.propTypes = {
  placeholderContent: PropTypes.string,
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

StepSelectCountries.defaultProps = {
  placeholderContent: '',
};

export default StepSelectCountries;
