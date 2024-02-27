import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReturnTitle from '../../../../Reusable/ReturnTitle/ReturnTitle';
import './SuitcaseList.scss';
import {
  addItem,
  addItemRequest,
  toggleCheckbox,
  updateItem,
} from '../../../../../actions/suitcase';
import { Checkbox } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

const SuitcaseList = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.suitcase.itemList);
  const [newItemName, setNewItemName] = useState('');
  const { tripId } = useParams();

  const handleAddItem = (newItemName) => {
    // Récupérez le plus grand ID existant dans la liste des éléments
    const maxId = itemList.reduce(
      (max, item) => (item.id > max ? item.id : max),
      0
    );

    // Générez un nouvel ID en ajoutant 1 au plus grand ID existant
    const newId = maxId + 1;

    // Créez le nouvel objet d'élément avec les propriétés nécessaires
    const newItem = {
      id: newId,
      name: newItemName,
      checked: false,
    };

    const newItemRequest = {
      name: newItemName,
      checked: false,
    };

    // Dispatchez l'action pour ajouter le nouvel élément
    //dispatch(addItem(newItem));
    dispatch(addItemRequest(newItemRequest, tripId));
  };

  const handleCheckboxChange = (id, name, checked) => {
    dispatch(toggleCheckbox({ id, name, checked }));
    dispatch(updateItem({ id, name, checked }));
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
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuitcaseList;
