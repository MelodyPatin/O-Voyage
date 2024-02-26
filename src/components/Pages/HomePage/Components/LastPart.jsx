/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './LastPart.scss';
import Screens from '../../../../assets/Screens.png';

const LastPart = () => {
  return (
    <div className="lastPart">
      <img src={Screens} alt="mockups" />
      <p>
        O'Voyage a été créé avec la passion de rassembler les gens autour
        d'aventures extraordinaires. Que chaque kilomètre parcouru soit source
        de découvertes, d'amitiés et de souvenirs impérissables. Préparez-vous à
        une expérience de voyage sans pareille ! Inscrivez-vous maintenant et
        commencez votre périple avec O'Voyage. Ensemble, faisons de chaque
        voyage une histoire à raconter.
      </p>
    </div>
  );
};

export default LastPart;
