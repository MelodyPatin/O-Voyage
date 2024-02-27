import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReturnTitle from '../../../../Reusable/ReturnTitle/ReturnTitle';
import './SuitcaseList.scss';
import {
  addItem,
  addItemRequest,
  removeListItem,
  toggleCheckbox,
  updateItem,
  //removeItemRequest, // Importez l'action removeItemRequest
} from '../../../../../actions/suitcase';
import { Checkbox } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';

const SuitcaseList = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.suitcase.itemList);
  const [newItemName, setNewItemName] = useState('');
  const { tripId } = useParams();

  const handleAddItem = (newItemName) => {
    const maxId = itemList.reduce(
      (max, item) => (item.id > max ? item.id : max),
      0
    );
    const newId = maxId + 1;
    const newItem = { id: newId, name: newItemName, checked: false };
    const newItemRequest = { name: newItemName, checked: false };
    dispatch(addItemRequest(newItemRequest, tripId));
  };

  const handleCheckboxChange = (id, name, checked) => {
    dispatch(toggleCheckbox({ id, name, checked }));
    dispatch(updateItem({ id, name, checked }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeListItem(id, tripId)); // Dispatchez l'action pour supprimer l'élément
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItemName.trim() !== '') {
      handleAddItem(newItemName);
      setNewItemName('');
    }
  };

  return (
    <div className="suitcaseList">
      <ReturnTitle textContent="Ma valise" />
      <form className="form-suitcase" onSubmit={handleSubmit}>
        <input
          className="input-item"
          type="text"
          placeholder="Nouvel item"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className="submit-button" type="submit">
          Ajouter
        </button>
      </form>
      <ul className="items-list">
        {itemList.map((item) => (
          <li className="item" key={item.id}>
            <Checkbox
              className="checkbox"
              checked={item.checked || false}
              onChange={(e, data) =>
                handleCheckboxChange(item.id, item.name, data.checked)
              }
            />
            {item.name.length > 10 ? (
              <span title={item.name}>{item.name.substring(0, 10)}...</span>
            ) : (
              <span>{item.name}</span>
            )}
            <XMarkIcon
              className="x-icon"
              onClick={() => handleRemoveItem(item.id)}
            >
              Supprimer
            </XMarkIcon>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuitcaseList;
