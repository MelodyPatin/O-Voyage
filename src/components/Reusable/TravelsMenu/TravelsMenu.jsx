import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import './TravelsMenu.scss'; // Assurez-vous d'avoir un fichier de style pour le menu déroulant

const TravelsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <div className="TravelsMenu">
      <div className="dropdown-trigger" onClick={toggleMenu}>
        <div className="text">
          <p>Mes voyages</p>
          <span>Budapest entre amis</span>
        </div>
        {isOpen && <ChevronUpIcon className="icon" />}
        {!isOpen && <ChevronDownIcon className="icon" />}
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {/* Contenu du menu déroulant */}
          <ul>
            <li className="item">Italie avec Théophile</li>
            <li className="item">Voyage à St-Malo chez le blaireau</li>
            <li className="item">Sicile avec Nico</li>
            <li className="item">Une ptite crêpe à Crozon chez Mélo</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TravelsMenu;
