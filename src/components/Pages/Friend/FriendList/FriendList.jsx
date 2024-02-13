import React from 'react';
import './FriendList.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import IconButton from '../../../Reusable/IconButton/IconButton';
import User from '../../../Reusable/User/User';
import Footer from '../../../Reusable/Footer/Footer';

const FriendList = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className="friends">
      <HeaderConnected />
      <h2>
        <ArrowLeftIcon className="arrow" onClick={handleGoBack} />
        MES AMIS
      </h2>
      <Link to="/friends/add">
        <IconButton textContent="Ajouter un ami" icon="add" />
      </Link>
      <ul className="friendList">
        <li className="friend">
          <User
            firstName="Nicolas"
            lastName="Guillotte Pourroy de L'Auberivière de Quinsonas-Oudinot de Reggio "
          />
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
