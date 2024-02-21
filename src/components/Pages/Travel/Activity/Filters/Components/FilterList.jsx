import React from 'react';
import { Accordion } from 'semantic-ui-react';
import ReturnTitle from '../../../../../Reusable/ReturnTitle/ReturnTitle';

import './FilterList.scss';
import SimpleButton from '../../../../../Reusable/Buttons/SimpleButton';

const FilterList = () => {
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // Logique pour traiter les filtres sélectionnés ou déclencher une action
  };
  const panels = [
    {
      key: 'panel-1',
      title: 'Tag',
      content: 'Contenu pour Tags',
    },
    {
      key: 'panel-2',
      title: 'Jours',
      content: 'Contenu pour Jours',
    },
    {
      key: 'panel-3',
      title: 'Villes',
      content: 'Contenu pour Ville',
    },
    {
      key: 'panel-4',
      title: 'Pays',
      content: 'Contenu pour Pays',
    },
  ];

  return (
    <div className="filterList">
      <ReturnTitle textContent="Filtrer" />
      <form className="filters" onSubmit={handleFilterSubmit}>
        <p>Reinitialiser tous les filtres</p>
        <Accordion
          defaultActiveIndex={[0, 2]}
          panels={panels}
          exclusive={false}
          fluid
        />
        <SimpleButton textContent="Filtrer" />
      </form>
    </div>
  );
};

export default FilterList;
