import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReturnTitle from '../../../../Reusable/ReturnTitle/ReturnTitle';
import './SuitcaseList.scss';
import ItemSuitcase from './ItemSuitcase';
import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';
import {
  fetchListRequest,
  saveListRequest,
} from '../../../../../actions/suitcase';
import IconButton from '../../../../Reusable/Buttons/IconButton';

const SuitcaseList = () => {
  const [updatedList, setUpdatedList] = useState([]); // State to manage the updated list
  const [newItem, setNewItem] = useState([{ name: '' }]); // État pour le nouvel item
  const dispatch = useDispatch();

  const list = useSelector((state) => state.suitcase.list);

  const handleAddItem = (e) => {
    e.preventDefault();
    setNewItem([...newItem, { name: '' }]);
  };

  const handleItemChange = (index, newValue) => {
    const newList = [...updatedList];
    newList[index] = newValue;
    setUpdatedList(newList);
  };

  const handleSaveList = () => {
    dispatch(saveListRequest(updatedList));
  };

  return (
    <div className="suitcaseList">
      {/* Title for the list  */}
      <ReturnTitle textContent="Ma valise" />
      {/* List of users */}
      <form action="">
        <ul>
          {list.map((item, index) => (
            <li key={item.id}>
              <ItemSuitcase
                index={index}
                itemId={item.id}
                item={item.name}
                onItemChange={(newValue) => handleItemChange(index, newValue)}
              />
            </li>
          ))}
          {newItem.map((item, index) => (
            <li key={item.id}>
              <ItemSuitcase
                index={index}
                itemId={item.id}
                item={item.name}
                onItemChange={(newValue) => handleItemChange(index, newValue)}
              />
            </li>
          ))}
        </ul>
        <IconButton
          textContent="Ajouter un item"
          icon="add"
          onClick={handleAddItem}
        >
          Ajouter un item
        </IconButton>
        <SimpleButton
          textContent="Sauvegarder ma valise"
          onClick={handleSaveList}
        />
      </form>
      <SimpleButton textContent="Retour" />
    </div>
  );
};

export default SuitcaseList;
