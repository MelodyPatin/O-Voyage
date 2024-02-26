import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Steps.scss';

import SimpleButton from '../Buttons/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';

import {
  handleStepReset,
  submitUpdateTravel,
  updateSelectedTravelers,
} from '../../../actions/trip';
import { clearErrorMessage } from '../../../actions/user';

const StepSelectTravelersUpdate = ({
  buttonContent,
  placeholderContent,
  labelContent,
  options,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const tripId = useSelector((state) => state.trip.tripId);

  // Click handler for the form submission
  const handleClick = (e) => {
    e.preventDefault();
    // Submit the updated travel information
    dispatch(submitUpdateTravel());
    // Clear any error messages
    dispatch(clearErrorMessage());
    // Navigate to the trip details page after the update
    navigate(`/trip/${tripId}`);
    // Reset the step state to the initial step
    dispatch(handleStepReset());
  };

  // Callback function to handle the selection change in the MultipleSelector
  const handleSelectionChange = (selected) => {
    // Convert each selected traveler name into an object { key, value }
    const newSelected = selected
      .map((selectedTravelerName) => {
        // Find the object in options that corresponds to this traveler name
        const selectedTraveler = options.find(
          (traveler) => traveler.value === selectedTravelerName
        );

        // Check if a corresponding traveler was found
        if (selectedTraveler) {
          // Return an object with the appropriate keys and values
          return { key: selectedTraveler.key, value: selectedTraveler.value };
        }
        // Handle the case where no corresponding traveler was found
        console.error(
          `Aucun pays correspondant trouvé pour la valeur sélectionnée: ${selectedTravelerName}`
        );
        // Return null to indicate a problem
        return null;
      })
      .filter(Boolean); // Filter out null items (cases where no corresponding traveler was found)

    // Dispatch the action to update the selected travelers
    dispatch(updateSelectedTravelers(newSelected));
  };

  // Retrieve the selected travelers from the Redux store
  const selected = useSelector((state) => state.trip.selectedTravelers);

  return (
    <div className="StepSelect">
      {/* Form with label and MultipleSelector for traveler selection */}
      <form autoComplete="off" onSubmit={handleClick}>
        <div className="LabelInput">
          <p>{labelContent}</p>
          <MultipleSelector
            placeholderContent={placeholderContent}
            options={options}
            selected={selected.map((traveler) => traveler.value)}
            onChange={handleSelectionChange}
          />
        </div>
        {/* Display error message if present */}
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

StepSelectTravelersUpdate.propTypes = {
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

StepSelectTravelersUpdate.defaultProps = {
  placeholderContent: '',
};

export default StepSelectTravelersUpdate;
