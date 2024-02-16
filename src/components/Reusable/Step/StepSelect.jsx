import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import SimpleButton from '../SimpleButton/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities, updateSelectedCountries } from '../../../actions/trip';

const StepSelect = ({
  buttonContent,
  placeholderContent,
  labelContent,
  options,
  handleClick,
}) => {
  const dispatch = useDispatch();

  const handleSelectionChange = (selected) => {
    // Convertir chaque élément de selected en un objet { key, value }
    const newSelected = selected.map(selectedCountryName => {
      // Trouver l'objet dans options qui correspond à ce nom de pays
      const selectedCountry = options.find(country => country.value === selectedCountryName);
      
      // Vérifier si un pays correspondant a été trouvé
      if (selectedCountry) {
        // Retourner un objet avec les clés et valeurs appropriées
        return { key: selectedCountry.key, value: selectedCountry.value };
      } else {
        // Gérer le cas où aucun pays correspondant n'a été trouvé
        console.error(`Aucun pays correspondant trouvé pour la valeur sélectionnée: ${selectedCountryName}`);
        // Retourner null pour indiquer un problème
        return null;
      }
    }).filter(Boolean); // Filtrer les éléments nuls (cas où aucun pays correspondant n'a été trouvé)
    
    console.log(newSelected);
    // Dispatch de l'action pour mettre à jour les pays sélectionnés
    dispatch(updateSelectedCountries(newSelected));
  };
  

  const selected = useSelector((state) => state.trip.selectedCountries);

  return (
    <div className="StepSelect">
      <form action="">
        <div className="LabelInput">
          <p>{labelContent}</p>
          <MultipleSelector
            placeholderContent={placeholderContent}
            options={options}
            selected={selected.value}
            onChange={handleSelectionChange}
          />
        </div>
        <SimpleButton textContent={buttonContent} onClick={handleClick} />
      </form>
    </div>
  );
};

StepSelect.propTypes = {
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

export default StepSelect;
