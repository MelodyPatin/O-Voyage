import React from 'react';
import './FriendList.scss';

import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import IconButton from '../../../Reusable/IconButton/IconButton';
import User from '../../../Reusable/User/User';
import Footer from '../../../Reusable/Footer/Footer';

const FriendList = () => {
  return (
    <div className="friends">
      <HeaderConnected />
      <h2>
        <ArrowLeftIcon className="arrow" />
        MES AMIS
      </h2>
      <IconButton textContent="Ajouter un ami" icon="add" />
      <ul className="friendList">
        <li className="friend">
          <User firstName="Nicolas" lastName="Guillotte Pourroy de L'Auberivière de Quinsonas-Oudinot de Reggio " />
          {/* XMarkIcon for indicating friend deletion */}
          <XMarkIcon className="icon" />
        </li>
        <li className="friend">
          <User firstName="Nicolas" lastName="Guillotte" />
          {/* XMarkIcon for indicating friend deletion */}
          <XMarkIcon className="icon" />
        </li>
        <li className="friend">
          <User firstName="Nicolas" lastName="Guillotte" />
          {/* XMarkIcon for indicating friend deletion */}
          <XMarkIcon className="icon" />
        </li>
        <li className="friend">
          <User firstName="Nicolas" lastName="Guillotte" />
          {/* XMarkIcon for indicating friend deletion */}
          <XMarkIcon className="icon" />
        </li>
        <li className="friend">
          <User firstName="Nicolas" lastName="Guillotte" />
          {/* XMarkIcon for indicating friend deletion */}
          <XMarkIcon className="icon" />
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default FriendList;