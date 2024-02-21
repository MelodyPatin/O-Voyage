import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import SimpleButton from '../Buttons/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedCities } from '../../../actions/trip';

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
    dispatch(updateSelectedCities(newSelected));
  };

  const selected = useSelector((state) => state.trip.selectedCities);
  console.log(selected);
  return (
    <div className="StepSelect">
      <form autoComplete="off" onSubmit={handleClick}>
        <div className="LabelInput">
          <p>{labelContent}</p>
          <MultipleSelector
            placeholderContent={placeholderContent}
            options={options}
            selected={selected.map((city) => city.value)} // Utiliser map pour obtenir un tableau de valeurs
            onChange={handleSelectionChange}
          />
        </div>
        <SimpleButton textContent={buttonContent} onClick={handleClick} />
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
