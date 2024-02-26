import React from 'react';
import './MultipleSelector.scss';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const MultipleSelector = ({
  placeholderContent,
  options,
  onChange,
  selected,
}) => {
  // Handle change in selection
  const handleSelectionChange = (event, data) => {
    const selectedOptions = data.value; // Get the selected options from the event data
    if (onChange) {
      onChange(selectedOptions); // Pass the selected options to the update function in the parent component
    }
  };

  return (
    <Dropdown
      placeholder={placeholderContent}
      fluid
      multiple
      search
      selection
      options={options}
      id="MultipleSelector"
      onChange={handleSelectionChange}
      value={selected}
    />
  );
};

MultipleSelector.propTypes = {
  placeholderContent: PropTypes.string,
  selected: PropTypes.array,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

export default MultipleSelector;
