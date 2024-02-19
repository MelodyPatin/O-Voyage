import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import SimpleButton from '../SimpleButton/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';
import { useDispatch, useSelector } from 'react-redux';
import { addCityToTravel, addTravelerToTravel, submitCreateTravel, updateSelectedTravelers } from '../../../actions/trip';

const StepSelectTravelers = ({
  buttonContent,
  placeholderContent,
  labelContent,
  options,
}) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(submitCreateTravel());
  };

  const handleSelectionChange = (selected) => {
    // Convertir chaque élément de selected en un objet { key, value }
    const newSelected = selected
      .map((selectedTravelerName) => {
        // Trouver l'objet dans options qui correspond à ce nom de pays
        const selectedTraveler = options.find(
          (traveler) => traveler.value === selectedTravelerName
        );

        // Vérifier si un pays correspondant a été trouvé
        if (selectedTraveler) {
          // Retourner un objet avec les clés et valeurs appropriées
          return { key: selectedTraveler.key, value: selectedTraveler.value };
        } else {
          // Gérer le cas où aucun pays correspondant n'a été trouvé
          console.error(
            `Aucun pays correspondant trouvé pour la valeur sélectionnée: ${selectedTravelerName}`
          );
          // Retourner null pour indiquer un problème
          return null;
        }
      })
      .filter(Boolean); // Filtrer les éléments nuls (cas où aucun pays correspondant n'a été trouvé)

    // Dispatch de l'action pour mettre à jour les villes sélectionnées
    dispatch(updateSelectedTravelers(newSelected));
  };

  const selected = useSelector((state) => state.trip.selectedTravelers);

  return (
    <div className="StepSelect">
      <form autoComplete="off" onSubmit={handleClick}>
        <div className="LabelInput">
          <p>{labelContent}</p>
          <MultipleSelector
            placeholderContent={placeholderContent}
            options={options}
            selected={selected.value}
            onChange={handleSelectionChange}
          />
        </div>
        <SimpleButton
          textContent={buttonContent}
          onClick={handleClick}
          type="button"
        />
      </form>
    </div>
  );
};

StepSelectTravelers.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  placeholderContent: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StepSelectTravelers;
