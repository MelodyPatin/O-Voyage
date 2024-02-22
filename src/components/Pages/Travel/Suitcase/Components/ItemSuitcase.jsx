import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ItemSuitcase.scss';
import { Checkbox } from 'semantic-ui-react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';

const ItemSuitcase = ({ index, item }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(item || '');
  const handleRemove = () => {
    console.log("coucou on a supprimé l'input");
    // dispatch(removeListItem(index)); // Dispatch de l'action pour supprimer l'élément dans le store Redux
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="ItemSuitcase">
      {/* Checkbox for item completion status */}
      <Checkbox className="checkbox" />
      {/* Input for item text */}
      <TextField
        required
        className="inputSuitcase"
        placeholder="Nouvel item"
        fullWidth
        value={value}
        onChange={handleChange}
      />
      {/* XMarkIcon for indicating item deletion */}
      <button type="button" onClick={handleRemove}>
        <XMarkIcon className="icon" />
      </button>
    </div>
  );
};

ItemSuitcase.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
};

export default ItemSuitcase;
