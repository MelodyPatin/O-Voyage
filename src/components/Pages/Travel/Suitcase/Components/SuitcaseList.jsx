import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReturnTitle from '../../../../Reusable/ReturnTitle/ReturnTitle';
import './SuitcaseList.scss';
import ItemSuitcase from './ItemSuitcase';
import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';
import { fetchListRequest } from '../../../../../actions/suitcase';
import IconButton from '../../../../Reusable/Buttons/IconButton';

const SuitcaseList = () => {
  const { tripId } = useParams();
  const dispatch = useDispatch();
  const [updatedList, setUpdatedList] = useState([]); // State to manage the updated list
  const [newItem, setNewItem] = useState([{ name: '' }]); // État pour le nouvel item

  useEffect(() => {
    // Dispatchez l'action pour récupérer la liste lorsque le composant est monté
    dispatch(fetchListRequest(tripId));
  }, [dispatch, tripId]);

  const list = useSelector((state) => state.suitcase.list);

  const handleAddItem = (e) => {
    e.preventDefault();
    setNewItem([...newItem, { name: '' }]);
  };

  return (
    <div className="suitcaseList">
      {/* Title for the list  */}
      <ReturnTitle textContent="Ma valise" />
      {/* List of users */}
      <form action="">
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <ItemSuitcase index={index} item={item.name} />
            </li>
          ))}
          {newItem.map((item, index) => (
            <li key={index}>
              <ItemSuitcase index={index} item={item.name} />
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
        <SimpleButton textContent="Sauvegarder ma valise" />
      </form>
      <SimpleButton textContent="Retour" />
    </div>
  );
};

export default SuitcaseList;
