import React from 'react';
import './LabelInput.scss';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const LabelInputUpdate = ({
  placeholder,
  value,
  label,
  name,
  type,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt, name);
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

LabelInputUpdate.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
LabelInputUpdate.defaultProps = {
  value: '',
  type: 'text',
};

export default LabelInputUpdate;

/* 
onChange={changeField} 
*/
