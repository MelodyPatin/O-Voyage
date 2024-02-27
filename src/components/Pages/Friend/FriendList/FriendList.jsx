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

  // useEffect to fetch friends when the component mounts
  useEffect(() => {
    if (!friendsFetched) {
      // Fetch friends only if they haven't been fetched before
      dispatch(fetchFriends());
      dispatch(clearSearchFriend());
    }
  }, [dispatch, friendsFetched]);

  // Function to handle deleting a friend
  const handleDeleteFriend = (friendId) => {
    dispatch(deleteFriend(friendId)); // Calling the deleteFriend function with the friend's ID to delete
  };

  // Function to navigate back to the previous page
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
            />
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default FriendList;
