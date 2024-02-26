import React from 'react';
import './LabelInput.scss';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const LabelInput = ({ placeholder, value, label, name, type, onChange }) => {
  // Event handler for input value changes
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  // Generate a unique input ID
  const inputId = `field-${name}`;

  return (
    <div className="LabelInput">
      <p>{label}</p>
      <Input
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
        onChange={handleChange}
        id={inputId}
      />
    </div>
  );
};

LabelInput.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

LabelInput.defaultProps = {
  value: '',
  type: 'text',
};

export default LabelInput;
