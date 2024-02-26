import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './Steps.scss';
import SimpleButton from '../Buttons/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';

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

  // Callback function to handle the selection change in the MultipleSelector
  const handleSelectionChange = (selected) => {
    // Convert each selected city name into an object { key, value }
    const newSelected = selected
      .map((selectedCityName) => {
        // Find the object in options that corresponds to this city name
        const selectedCity = options.find(
          (city) => city.value === selectedCityName
        );

        // Check if a corresponding city was found
        if (selectedCity) {
          // Return an object with the appropriate keys and values
          return { key: selectedCity.key, value: selectedCity.value };
        }
        // Handle the case where no corresponding city was found
        console.error(
          `Aucune ville correspondante trouvée pour la valeur sélectionnée: ${selectedCityName}`
        );
        // Return null to indicate a problem
        return null;
      })
      .filter(Boolean); // Filter out null items (cases where no corresponding city was found)

    // Dispatch the action to update the selected cities
    dispatch(updateSelectedCities(newSelected));
  };

  // Retrieve the selected cities from the Redux store
  const selectedCities = useSelector((state) => state.trip.selectedCities);
  // Retrieve error message from the Redux store
  const errorMessage = useSelector((state) => state.user.errorMessage);

  // Click handler for the form submission
  const handleStepClick = (e) => {
    e.preventDefault();

    // Check if at least one city is selected
    if (selectedCities.length === 0) {
      dispatch(setErrorMessage('Veuillez sélectionner au moins une ville.'));
      return; // Stop the process if no city is selected
    }

    // If cities are selected, proceed to the next step
    handleClick();
    dispatch(clearErrorMessage());
  };

  return (
    <div className="StepSelect">
      {/* Form with label and MultipleSelector for city selection */}
      <form autoComplete="off">
        <div className="LabelInput">
          <p>{labelContent}</p>
          <MultipleSelector
            placeholderContent={placeholderContent}
            options={options}
            selected={selectedCities.map((city) => city.value)}
            onChange={handleSelectionChange}
          />
        </div>
        {/* Display error message if present */}
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <SimpleButton textContent={buttonContent} onClick={handleStepClick} />
      </form>
    </div>
  );
};

StepSelectCities.propTypes = {
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

StepSelectCities.defaultProps = {
  placeholderContent: '',
};

export default StepSelectCities;
