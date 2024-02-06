import React from 'react';
import './LabelInput.scss';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const LabelInput = ({placeholder, value, label }) => {
  return (
  <div className="LabelInput">
    <p>{label}</p>
    <Input placeholder={placeholder} value={value} />
  </div>
)};

LabelInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default LabelInput;
