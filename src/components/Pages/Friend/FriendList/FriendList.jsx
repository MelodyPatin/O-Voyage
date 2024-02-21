import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './FriendList.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import HeaderConnected from '../../../Reusable/HeaderConnected/HeaderConnected';
import IconButton from '../../../Reusable/Buttons/IconButton';
import User from '../../../Reusable/User/User';
import Footer from '../../../Reusable/Footer/Footer';
import { fetchFriends } from '../../../../actions/user';

const FriendList = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, []);

  const friends = useSelector((state) => state.user.friends);

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
            <XMarkIcon className="icon" />
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default FriendList;
