import React from 'react';
import PropTypes from 'prop-types';
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
        <Link to="/home">
          <SimpleButton textContent="Retour à l'accueil" />
        </Link>
      </div>
      <Footer className="footer" />
    </div>
  );
};

Error.propTypes = {
  number: PropTypes.string.isRequired,
  textContent: PropTypes.string.isRequired,
};

export default Error;
