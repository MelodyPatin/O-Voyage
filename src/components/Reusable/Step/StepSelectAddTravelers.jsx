import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Steps.scss';

import SimpleButton from '../Buttons/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';

import {
  addTravelerToTravelUpdate,
  updateSelectedTravelers,
} from '../../../actions/trip';
import { clearErrorMessage } from '../../../actions/user';

const StepSelectAddTravelers = ({
  buttonContent,
  placeholderContent,
  labelContent,
  options,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Retrieve error message from the Redux store
  const errorMessage = useSelector((state) => state.user.errorMessage);
  // Retrieve travel ID from the Redux store
  const travelId = useSelector((state) => state.trip.trip.id);

  // Click handler for the form submission
  const handleClick = (e) => {
    e.preventDefault();
    // Dispatch action to add selected travelers to the current travel
    dispatch(addTravelerToTravelUpdate(travelId));
    // Clear error messages
    dispatch(clearErrorMessage());
    // Navigate to the travel details page
    navigate(`/trip/${travelId}`);
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
            selected={selected.map((traveler) => traveler.value)} // Use map to get an array of values
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
