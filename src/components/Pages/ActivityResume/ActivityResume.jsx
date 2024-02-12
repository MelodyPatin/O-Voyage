import React from 'react';
import PropTypes from 'prop-types';

import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../Reusable/ReturnTitle/ReturnTitle';
import SimpleButton from '../../Reusable/SimpleButton/SimpleButton';

import './ActivityResume.scss';
import Footer from '../../Reusable/Footer/Footer';
import Tag from '../../Reusable/Tag/Tag';

import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import Avatar from '../../Reusable/Avatar/Avatar';
import NavBarMobile from '../../Reusable/NavBarMobile/NavBarMobile';

const ActivityResume = ({
  number,
  activityTitle,
  address,
  price,
  openTime,
  url,
  description,
  activityCategory,
  onDesktop,
}) => {
  let categoryText;

  if (activityCategory === 'culture') {
    categoryText = 'Visite culturelle';
  } else if (activityCategory === 'restaurant') {
    categoryText = 'Restaurant';
  } else if (activityCategory === 'activity') {
    categoryText = 'Activité';
  } else if (activityCategory === 'pub') {
    categoryText = 'Bar';
  }

  return (
    <div className="ActivityResume">
      {!onDesktop && <NavBarHeader isLogged />}
      <ReturnTitle avatar textContent={`#${number} ${activityTitle}`} />
      <div className="content">
        <p>Activité : {activityTitle}</p>
        <p>Adresse : {address}</p>
        <p>Prix : {price}€</p>
        <p>Horaires : {openTime}</p>
        <p>Site internet : {url} </p>
        <p>Description : {description} </p>
        <Tag category={activityCategory} text={categoryText} className="tag" />
        <div className="icons">
          <PencilIcon className="icon" />
          <TrashIcon className="icon" />
        </div>
        <SimpleButton textContent="Fermer" className="button" />
      </div>
      {!onDesktop && <NavBarMobile />}
    </div>
  );
};

ActivityResume.propTypes = {
  number: PropTypes.string.isRequired,
  activityTitle: PropTypes.string.isRequired,
  address: PropTypes.string,
  price: PropTypes.number,
  openDays: PropTypes.string,
  openTime: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  activityCategory: PropTypes.string,
  onDesktop: PropTypes.bool,
};

export default ActivityResume;
