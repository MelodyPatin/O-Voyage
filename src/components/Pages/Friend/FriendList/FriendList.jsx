import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './FriendList.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import IconButton from '../../../Reusable/Buttons/IconButton';
import User from '../../../Reusable/User/User';
import Footer from '../../../Reusable/Footer/Footer';
import {
  fetchFriends,
  deleteFriend,
  clearSearchFriend,
} from '../../../../actions/user';

const FriendList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const friends = useSelector((state) => state.user.friends);
  const friendsFetched = useSelector((state) => state.user.friendsFetched);

  useEffect(() => {
    if (!friendsFetched) {
      // Ne charge les amis que si ils n'ont pas déjà été chargés
      dispatch(fetchFriends());
      dispatch(clearSearchFriend());
    }
  }, [dispatch, friendsFetched]);

  // Fonction pour supprimer un ami
  const handleDeleteFriend = (friendId) => {
    dispatch(deleteFriend(friendId)); // Appeler la fonction deleteFriend avec l'ID de l'ami à supprimer
  };

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
        {friends.map((friend) => (
          <li className="friend" key={friend.id}>
            <User user={friend} />
            {/* XMarkIcon for indicating friend deletion */}
            <XMarkIcon
              className="icon"
              onClick={() => handleDeleteFriend(friend.id)}
            />{' '}
            {/* Ajouter un gestionnaire d'événements onClick pour appeler handleDeleteFriend avec l'ID de l'ami */}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default FriendList;
