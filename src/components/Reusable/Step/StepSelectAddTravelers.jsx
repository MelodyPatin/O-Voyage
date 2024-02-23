import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import SimpleButton from '../Buttons/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCityToTravel,
  addTravelerToTravelUpdate,
  submitCreateTravel,
  submitUpdateTravel,
  updateSelectedTravelers,
} from '../../../actions/trip';
import { clearErrorMessage } from '../../../actions/user';
import { useNavigate } from 'react-router-dom';

const StepSelectAddTravelers = ({
  buttonContent,
  placeholderContent,
  labelContent,
  options,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const travelId = useSelector((state) => state.trip.trip.id);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addTravelerToTravelUpdate(travelId));
    dispatch(clearErrorMessage());
    navigate(`/trip/${travelId}`);
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
            selected={selected.map((traveler) => traveler.value)} // Utiliser map pour obtenir un tableau de valeurs
            onChange={handleSelectionChange}
          />
        </div>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <SimpleButton
          textContent={buttonContent}
          onClick={handleClick}
          type="button"
        />
      </form>
    </div>
  );
};

StepSelectAddTravelers.propTypes = {
  placeholderContent: PropTypes.string,
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

StepSelectAddTravelers.defaultProps = {
  placeholderContent: '',
};

export default StepSelectAddTravelers;
