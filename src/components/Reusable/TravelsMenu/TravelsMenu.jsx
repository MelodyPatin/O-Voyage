import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import './TravelsMenu.scss'; // Assurez-vous d'avoir un fichier de style pour le menu déroulant

const TravelsMenu = () => {
  // State to track whether the dropdown menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu's open/closed state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="TravelsMenu">
        {/* Dropdown trigger section */}
        <div className="dropdown-trigger" onClick={toggleMenu}>
          <div className="text">
            <p>Mes voyages</p>
            <span>Budapest entre amis</span>
          </div>
          {/* Display the appropriate icon based on the menu's state */}
          {isOpen && <ChevronUpIcon className="icon" />}
          {!isOpen && <ChevronDownIcon className="icon" />}
        </div>
        {/* Dropdown content section (visible when the menu is open) */}
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
    </div>
  );
};

export default TravelsMenu;
