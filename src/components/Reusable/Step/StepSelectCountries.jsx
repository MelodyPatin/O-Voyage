import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './Steps.scss';

import SimpleButton from '../Buttons/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';

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

  // Retrieve selected countries from the Redux store
  const selectedCountries = useSelector(
    (state) => state.trip.selectedCountries
  );

  // Retrieve error message from the Redux store
  const errorMessage = useSelector((state) => state.user.errorMessage);

  // Fetch cities associated with selected countries
  const handleFetchCities = () => {
    if (selectedCountries && selectedCountries.length > 0) {
      selectedCountries.map((country) => {
        dispatch(fetchCities(country.key));
      });
    } else {
      dispatch(setErrorMessage('Veuillez sélectionner au moins un pays.'));
    }
  };

  // Callback function to handle the selection change in the MultipleSelector
  const handleSelectionChange = (selected) => {
    // Convert each selected country name into an object { key, value }
    const newSelected = selected
      .map((selectedCountryName) => {
        // Find the object in options that corresponds to this country name
        const selectedCountry = options.find(
          (country) => country.value === selectedCountryName
        );

        // Check if a corresponding country was found
        if (selectedCountry) {
          // Return an object with the appropriate keys and values
          return { key: selectedCountry.key, value: selectedCountry.value };
        }
        // Handle the case where no corresponding country was found
        console.error(
          `Aucun pays correspondant trouvé pour la valeur sélectionnée: ${selectedCountryName}`
        );
        // Return null to indicate a problem
        return null;
      })
      .filter(Boolean); // Filter out null items (cases where no corresponding country was found)

    // Dispatch the action to update the selected countries
    dispatch(updateSelectedCountries(newSelected));
  };

  // Click handler for the form submission
  const handleStepClick = (e) => {
    e.preventDefault();
    // Check if at least one country is selected
    if (selectedCountries.length === 0) {
      dispatch(setErrorMessage('Veuillez sélectionner au moins un pays.'));
      return; // Stop the process if no country is selected
    }

    // If countries are selected, proceed to the next step
    handleClick();
    handleFetchCities();
    dispatch(clearErrorMessage());
  };

  return (
    <div className="StepSelect">
      {/* Form with label and MultipleSelector for country selection */}
      <form>
        <div className="LabelInput">
          <p>{labelContent}</p>
          <MultipleSelector
            placeholderContent={placeholderContent}
            options={options}
            selected={selectedCountries.map((country) => country.value)}
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
