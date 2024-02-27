import React from 'react';

const ContentLegalNotice = () => {
  return (
    <ul className="legalNoticeContent">
      <li>
        <p className="question">1. Éditeur du Site :</p>
        <p className="answer">
          Ovoyage <br />
          5 lotissement le Clos de Goulien 29160 Crozon <br />
          melody.patin.dev@gmail.com
        </p>
      </li>
      <li>
        <p className="question">2. Hébergeur du Site :</p>
        <p className="answer">
          OVH <br />
          2 RUE KELLERMANN 59100 ROUBAIX
        </p>
      </li>
      <li>
        <p className="question">3. Accès au Site :</p>
        <p className="answer">
          Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance. En cas de modification, interruption ou suspension du Site, l’Editeur ne saurait être tenu responsable.
        </p>
      </li>
      <li>
        <p className="question">4. Collecte des Données :</p>
        <p className="answer">
          Le Site assure à l’Utilisateur une collecte et un traitement d’informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés. En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l’Utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition de ses données personnelles. L’Utilisateur exerce ce droit : par mail à l’adresse email melody.patin.dev@gmail.com ou via son espace personnel.
        </p>
      </li>
      <li>
        <p className="question">5. Propriété Intellectuelle :</p>
        <p className="answer">
          Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
        </p>
      </li>
    </ul>
  );
};

export default ContentLegalNotice;
