import React from 'react';
import PropTypes from 'prop-types';

import NavBarHeader from '../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../Reusable/ReturnTitle/ReturnTitle';
import SimpleButton from '../../Reusable/SimpleButton/SimpleButton';

import './ActivityResume.scss';
import Footer from '../../Reusable/Footer/Footer';
import Tag from '../../Reusable/Tag/Tag';

import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const ActivityResume = ({
  number,
  activityTitle,
  address,
  price,
  openDays,
  openTime,
  url,
  description,
  activityCategory,
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
      <ReturnTitle textContent={`#${number} ${activityTitle}`} />
      <div className="content">
        <p>Adresse : {address}</p>
        <p>Prix : {price}€</p>
        <p>
          Horaires : {openDays} {openTime}
        </p>
        <p>Site internet : {url} </p>
        <p>Description : {description} </p>
        <Tag
          category={activityCategory}
          text={categoryText}
          className={'tag'}
        />
        <div className="icons">
          <PencilIcon className="icon" />
          <TrashIcon className="icon" />
        </div>
        <SimpleButton textContent={'Fermer'} className="button" />
      </div>
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
};

export default ActivityResume;
