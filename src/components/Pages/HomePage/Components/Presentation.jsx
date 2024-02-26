/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Presentation.scss';

const Presentation = () => {
  return (
    <div className="presentation">
      <img
        src="../src/assets/View1.png"
        alt="presentation of what the gallery page looks like"
      />
      <div>
        <h2 className="title">
          Bienvenue sur O'Voyage ! 🌍 Explorez le monde ensemble, créez des
          souvenirs inoubliables ! 🌟 Imaginez un voyage où chaque participant
          contribue à façonner l'expérience. <br /> Avec O'Voyage, vous avez le
          pouvoir de co-créer chaque moment de votre aventure. Proposez des
          activités qui vous passionnent, votez pour vos préférées, et ensemble,
          bâtissons un itinéraire unique et mémorable.
        </h2>
        <p className="content">Pourquoi créer un compte sur O'Voyage ?</p>
        <ul>
          <li className="content">
            Participation Active : Soyez le chef d'orchestre de votre voyage en
            contribuant à la sélection des activités qui correspondent à vos
            envies.
          </li>
          <li className="content">
            Itinéraire Personnalisé : Organisez votre journée à votre manière en
            suivant les activités les plus plébiscitées par la communauté.
          </li>
          <li className="content">
            Partage de Photos : Capturez chaque instant et partagez vos
            souvenirs visuels avec la fonctionnalité de partage de photos.
            Immortalisez vos expériences et créez des albums de voyage
            inoubliables.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Presentation;
