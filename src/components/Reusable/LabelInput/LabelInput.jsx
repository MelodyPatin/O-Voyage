import React from 'react';
import './LabelInput.scss';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const LabelInput = ({ placeholder, value, label, name, type, onChange }) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

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

// Valeurs par défaut pour les props
LabelInput.defaultProps = {
  value: '',
  type: 'text',
};

export default LabelInput;

/* 
onChange={changeField} 
*/
