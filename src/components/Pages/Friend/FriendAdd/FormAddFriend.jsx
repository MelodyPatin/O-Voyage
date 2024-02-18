import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

import { useNavigate } from 'react-router-dom';
import SimpleButton from '../../../Reusable/SimpleButton/SimpleButton';
import User from '../../../Reusable/User/User';
import api from '../../../../api';

const FormAddFriend = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  // contenu du champ de recherche
  const [search, setSearch] = useState('');

  // récupérer les résultats dans l'API
  const loadResults = () => {
    // console.log(`il faut faire appel à l API pour rechercher "${search}"`);

    // on envoie une requête à l'API et traiter la réponse
    api
      .get(`/user/${search}`)
      .then((response) => {
        console.log('success', response);

        setUsers(response.data.items);
      })
      .catch((error) => {
        // ici le traitement à appliquer quand la réponse arrive et qu'il y eu
        // une erreur (4xx ou 5xx)
        console.log('error', error);
      });
  };

  const handleGoBack = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    navigate(-1); // Navigue vers la page précédente
  };

  return (
    <div className="formAddFriend" action="">
      <form
        className="formAdd"
        onSubmit={(event) => {
          event.preventDefault();
          // console.log('submit');

          loadResults();
        }}
      >
        <Input
          icon="search"
          iconPosition="left"
          placeholder="Rechercher..."
          fluid
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </form>
      <div className="users">
        <User user="" />
      </div>
      <SimpleButton type="button" textContent="Ajouter" />
      <div className="buttonBack">
        <SimpleButton
          type="button"
          textContent="Retour"
          onClick={handleGoBack}
        />
      </div>
    </div>
  );
};

export default FormAddFriend;
