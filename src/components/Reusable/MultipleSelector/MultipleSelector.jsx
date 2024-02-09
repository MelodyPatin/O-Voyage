import React from 'react';
import './MultipleSelector.scss';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// Functional component : popup with input fields and a close button
const MultipleSelector = ({
  placeholderContent,
  options,
}) => {
  return (
        <Dropdown
          placeholder={placeholderContent}
          fluid
          multiple
          search
          selection
          options={options}
          id="MultipleSelector"
        />
  );
};

MultipleSelector.propTypes = {
  placeholderContent: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MultipleSelector;
