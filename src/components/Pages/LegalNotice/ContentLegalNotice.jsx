/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ContentLegalNotice = () => {
  return (
    <ul className="legalNotice">
      <li>
        <p className="question">1. Éditeur du Site :</p>
        <p className="answer">
          [Nom de votre entreprise] <br />
          [Adresse de l'entreprise] <br /> [Numéro de téléphone de l'entreprise]{' '}
          <br /> [Adresse e-mail de l'entreprise]
        </p>
      </li>
      <li>
        <p className="question">2. Directeur de la Publication :</p>
        <p className="answer">
          [Nom du directeur de la publication] <br />
          [Adresse e-mail du directeur de la publication]
        </p>
      </li>
      <li>
        <p className="question">3. Hébergeur du Site : </p>
        <p className="answer">
          [Nom de l'hébergeur]
          <br /> [Adresse de l'hébergeur] <br />
          [Numéro de téléphone de l'hébergeur] <br />
          [Adresse e-mail de l'hébergeur]
        </p>
      </li>
      <li>
        <p className="question">4. Propriété Intellectuelle : </p>
        <p className="answer">
          Tous les contenus présents sur le site, tels que les textes, images,
          logos, et autres éléments, sont la propriété exclusive de [Nom de
          votre entreprise]. Toute utilisation non autorisée de ces contenus est
          interdite.
        </p>
      </li>
      <li>
        <p className="question">5. Données Personnelles : </p>
        <p className="answer">
          [Nom de votre entreprise] s'engage à protéger la vie privée de ses
          utilisateurs. Les données personnelles collectées sont traitées
          conformément à notre politique de confidentialité, disponible à [lien
          vers la politique de confidentialité].
        </p>
      </li>
      <li>
        <p className="question">6. Cookies : </p>
        <p className="answer">
          Le site utilise des cookies pour améliorer l'expérience utilisateur.
          En naviguant sur le site, vous acceptez l'utilisation de ces cookies.
          Vous pouvez en savoir plus sur notre utilisation des cookies dans
          notre politique de confidentialité.
        </p>
      </li>
      <li>
        <p className="question">7. Responsabilité : </p>
        <p className="answer">
          [Nom de votre entreprise] décline toute responsabilité quant à
          l'utilisation du site et des informations qui y sont contenues. Les
          utilisateurs sont responsables de l'exactitude et de la légalité des
          informations qu'ils partagent et des activités qu'ils organisent via
          la plateforme.
        </p>
      </li>
      <li>
        <p className="question">8. Liens Externes : </p>
        <p className="answer">
          Le site peut contenir des liens vers des sites tiers. [Nom de votre
          entreprise] n'assume aucune responsabilité quant au contenu de ces
          sites externes.
        </p>
      </li>
      <li>
        <p className="question">9. Droit Applicable et Juridiction : </p>
        <p className="answer">
          Les présentes mentions légales sont régies par le droit applicable en
          [lieu de juridiction]. En cas de litige, les tribunaux de [lieu de
          juridiction] seront seuls compétents.
        </p>
      </li>
      <li>
        <p className="question">10. Contact : </p>
        <p className="answer">
          Pour toute question ou demande concernant les mentions légales,
          veuillez nous contacter à l'adresse suivante : [Adresse e-mail de
          contact].
        </p>
      </li>
    </ul>
  );
};

export default ContentLegalNotice;
