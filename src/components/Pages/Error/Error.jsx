import React from 'react';
import { Link } from 'react-router-dom';

import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../Reusable/ReturnTitle/ReturnTitle';
import SimpleButton from '../../Reusable/Buttons/SimpleButton';

import './Error.scss';
import Footer from '../../Reusable/Footer/Footer';

const Error = () => {
  return (
    <div className="error">
      <NavBarHeader />
      <ReturnTitle textContent="Erreur 404" />
      <div className="errorContainer">
        <p className="textContent">Oops, page introuvable</p>
        <Link to="/">
          <SimpleButton textContent="Retour à l'accueil" />
        </Link>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default Error;
