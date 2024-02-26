import PropTypes from 'prop-types';

import './Field.scss';

const Field = ({ value, type, name, placeholder, onChange }) => {
  // Handle the change event of the input
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  // Generate a unique input ID based on the field name
  const inputId = `field-${name}`;

  return (
    // Apply a CSS class based on whether the field has content
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />

      {/* Label element associated with the input */}
      <label htmlFor={inputId} className="field-label">
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Default values for props
Field.defaultProps = {
  value: '',
  type: 'text',
};

export default Field;
