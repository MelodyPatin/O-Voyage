/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector } from 'react-redux';
import PresentationCard from './PresentationCard';
import Aurelien from '../../../../assets/profile-aurelien.jpeg';
import Melody from '../../../../assets/profile-melody.png';
import Theophile from '../../../../assets/profile-theophile.jpeg';
import Nicolas from '../../../../assets/profile-nico.jpg';

const ContentHistory = () => {
  const content = useSelector((state) => state.content.contentHistory);
  const aventureContent =
    content && content.notre_aventure ? content.notre_aventure.content : '';
  const contactContent =
    content && content.contact ? content.contact.content : '';

  /*   return (
    <div className="historyContent">
      <h2>La Dream Team</h2>
      <div className="cards">
        <PresentationCard firstname="Aurélien" />
        <PresentationCard firstname="Mélody" />
        <PresentationCard firstname="Nicolas" />
        <PresentationCard firstname="Théophile" />
      </div>
      <div>{aventureContent}🌍✨</div>
      <div>{contactContent}</div>
    </div>
  );
}; */

  return (
    <div className="historyContent">
      <h2>La Dream Team</h2>
      <div className="cards">
        <PresentationCard
          firstname="Aurélien"
          presentation="Le Scrum master, inventeur de la méthode Agile à la Bretonne. Incontestablement le plus beau levé de coude de l'équipe."
          picture={Aurelien}
        />
        <PresentationCard
          firstname="Mélody"
          presentation="La Cheffe du Projet, la tête pensante, la visionnaire, notre gourou à tous."
          picture={Melody}
        />
        <PresentationCard
          firstname="Nicolas"
          presentation="L'incroyable Lead Dev Front. La légende raconte qu'il aurait codé l'entièreté du projet l'écran éteint."
          picture={Nicolas}
        />
        <PresentationCard
          firstname="Théophile"
          presentation="Le formidable Lead Dev Back. L'homme sans qui l'erreur 500 n'existerait pas."
          picture={Theophile}
        />
      </div>
      <h2>Notre Aventure O'Clock : Voyager Ensemble</h2>
      <div>
        <p>
          Nous sommes une équipe passionnée de quatre développeurs juniors,
          réunis dans le cadre de notre formation chez O'Clock. Animés par notre
          amour du voyage et motivés par l'idée de simplifier l'organisation des
          escapades en groupe, nous avons créé une plateforme collaborative en
          un mois, de la conception à la réalisation.
        </p>
        <p>
          Inspirés par une expérience mémorable du Nouvel An en Hongrie avec nos
          amis, nous avons canalisé notre énergie créative pour développer un
          site web accessible sur desktop et mobile. La plateforme vise à offrir
          une interface conviviale pour la planification de voyages en groupe,
          facilitant la gestion des itinéraires passés, présents et futurs.
        </p>
        <p>
          Chacun de nous a apporté ses compétences en développement web pour
          mettre en place des fonctionnalités innovantes. Au cœur du projet, la
          possibilité pour chaque participant de proposer des activités,
          soumises ensuite au vote des autres voyageurs. Notre système de vote
          permet de construire un itinéraire basé sur les préférences
          collectives, créant ainsi une expérience de voyage unique et
          personnalisée.
        </p>
        <p>
          Pendant ce mois intense chez O'Clock, nous avons intégré des
          fonctionnalités telles qu'une checklist individuelle, une gestion
          simplifiée des participants et un espace de partage de photos.
        </p>
        <p>
          Notre plateforme va au-delà de la simple planification de voyages ;
          elle incarne notre parcours d'apprentissage chez O'Clock et notre
          dévouement à créer des solutions innovantes. Elle symbolise notre
          capacité à collaborer en équipe, à relever des défis techniques et à
          transformer une idée passionnante en une réalité fonctionnelle. Notre
          projet est le résultat d'un mois intensif, mais aussi le début d'une
          aventure qui continuera à évoluer au fil de notre parcours
          professionnel.
        </p>
        <p>
          Voyagez avec nous sur cette plateforme collaborative, où la passion du
          développement web rencontre l'excitation de l'aventure en groupe. 🌍✨
        </p>
      </div>
      <h2>Nous contacter</h2>
      <p>N'hésitez pas à nous contacter :</p>
      <ul>
        <li>
          Aurélien :{' '}
          <a href="mailto:aurelien.guern@gmail.com">aurelien.guern@gmail.com</a>
        </li>
        <li>
          Mélody :{' '}
          <a href="mailto:melody.patin.dev@gmail.com">
            melody.patin.dev@gmail.com
          </a>
        </li>
        <li>
          Nicolas :{' '}
          <a href="mailto:nicolas.guillotte.pro@gmail.com">
            nicolas.guillotte.pro@gmail.com
          </a>
        </li>
        <li>
          Théophile :{' '}
          <a href="mailto:theophile.bernard@gmail.com">
            theophile.bernard@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContentHistory;
