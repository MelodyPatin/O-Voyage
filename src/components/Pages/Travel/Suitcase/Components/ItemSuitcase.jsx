import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ItemSuitcase.scss';
import { Checkbox } from 'semantic-ui-react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeListItem } from '../../../../../actions/suitcase';

const ItemSuitcase = ({ index, item, itemId }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(item || '');

  const handleRemove = () => {
    dispatch(removeListItem(index, itemId));
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
  itemId: PropTypes.number.isRequired,
};

export default ItemSuitcase;
