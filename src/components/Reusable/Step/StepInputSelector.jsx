import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Steps.scss';
import PropTypes from 'prop-types';

import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../Buttons/SimpleButton';
import MultipleSelector from '../MultipleSelector/MultipleSelector';

import { handleStepNext } from '../../../actions/trip';
import { updateActivityCities } from '../../../actions/activity';
import { clearErrorMessage, setErrorMessage } from '../../../actions/user';

const StepInputSelector = ({
  buttonContent,
  placeholderInputContent,
  placeholderSelectorContent,
  labelContent,
  valueInputContent,
  options,
  name,
  changeField,
}) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.user.errorMessage);

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
    dispatch(updateActivityCities(newSelected));
  };

  // Click handler for the "Next" button
  const handleClick = () => {
    // Check if no city is selected
    if (selected.length === 0) {
      dispatch(setErrorMessage("Veuillez sélectionner l'adresse et la ville."));
      return; // Stop progression if no city is selected
    }
    // Check if the input field is empty
    if (!valueInputContent.trim()) {
      dispatch(setErrorMessage('Veuillez saisir une valeur dans le champ.'));
      return; // Stop progression if the input field is empty
    }

    // Proceed to the next step
    dispatch(handleStepNext());
    dispatch(clearErrorMessage());
  };

  // Retrieve the selected cities from the Redux store
  const selected = useSelector((state) => state.activity.selectedCities);

  return (
    <div className="StepInputSelector">
      <div className="inputs">
        {/* Input field with label */}
        <LabelInput
          label={labelContent}
          className="label-input"
          placeholder={placeholderInputContent}
          value={valueInputContent}
          name={name}
          type="text"
          onChange={changeField}
        />
        {/* MultipleSelector for city selection */}
        <MultipleSelector
          className="selector"
          placeholderContent={placeholderSelectorContent}
          options={options}
          selected={selected.map((city) => city.value)} // Utiliser map pour obtenir un tableau de valeurs
          onChange={handleSelectionChange}
        />
      </div>
      {/* Display error message if there is one */}
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      <SimpleButton textContent={buttonContent} onClick={handleClick} />
    </div>
  );
};

StepInputSelector.propTypes = {
  placeholderInputContent: PropTypes.string,
  placeholderSelectorContent: PropTypes.string,
  valueInputContent: PropTypes.string,
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

StepInputSelector.defaultProps = {
  placeholderInputContent: '',
  placeholderSelectorContent: '',
  valueInputContent: '',
};

export default StepInputSelector;
