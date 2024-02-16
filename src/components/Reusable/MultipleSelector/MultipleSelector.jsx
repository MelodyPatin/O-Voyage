import React from 'react';
import './MultipleSelector.scss';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const MultipleSelector = ({ placeholderContent, options, onChange, selected }) => {

  const handleSelectionChange = (event, data) => {
    const selectedOptions = data.value; // Obtenez les options sélectionnées depuis les données de l'événement
    if (onChange) {
      onChange(selectedOptions); // Passez les options sélectionnées à la fonction de mise à jour dans le composant parent
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
