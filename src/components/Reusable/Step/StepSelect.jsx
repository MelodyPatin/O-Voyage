import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './Steps.scss';
import SimpleButton from '../Buttons/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';

import { fetchCities, updateSelectedCountries } from '../../../actions/trip';

const StepSelect = ({
  buttonContent,
  placeholderContent,
  labelContent,
  options,
  handleClick,
}) => {
  const dispatch = useDispatch();

  // Retrieve the selected countries from the Redux store
  const selectedCountries = useSelector(
    (state) => state.trip.selectedCountries
  );

  // Function to fetch cities based on selected countries
  const handleFetchCities = () => {
    // Check if there are selected countries
    if (selectedCountries && selectedCountries.length > 0) {
      // Map through selected countries and dispatch fetchCities action for each
      selectedCountries.map((country) => {
        dispatch(fetchCities(country.key));
      });
    } else {
      console.error('Aucun pays sélectionné');
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
          // Retourner un objet avec les clés et valeurs appropriées
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

  // Retrieve the selected countries from the Redux store
  const selected = useSelector((state) => state.trip.selectedCountries);

  return (
    <div className="StepSelect">
      {/* Form with label and MultipleSelector for country selection */}
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
          onClick={() => {
            handleClick();
            handleFetchCities();
          }}
        />
      </form>
    </div>
  );
};

StepSelect.propTypes = {
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

StepSelect.defaultProps = {
  placeholderContent: '',
};

export default StepSelect;
