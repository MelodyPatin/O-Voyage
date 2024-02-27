import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';
import LabelInput from '../../../../Reusable/LabelInput/LabelInput';
import { addFriend, fetchUserByMail } from '../../../../../actions/user';
import AvatarFriend from '../../../../Reusable/Avatar/AvatarFriends';

const FormAddFriend = ({
  inputValue,
  changeField,
  placeholderContent,
  buttonContent,
  labelContent,
  name,
}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userAvatar = useSelector((state) => state.user.emailSearch);
  const userFirstName = useSelector((state) => state.user.firstNameSearch);
  const userLastName = useSelector((state) => state.user.lastNameSearch);
  const friendId = useSelector((state) => state.user.userIdSearch);

  // Function to fetch user results based on email
  const loadResults = () => {
    dispatch(fetchUserByMail());
  };

  // Function to handle going back to the previous page
  const handleGoBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  // Function to handle adding a friend
  const handleAddFriend = () => {
    dispatch(addFriend(friendId));
    navigate('/friends');
  };

  return (
    <div className="formAddFriend" action="">
      <form
        className="formAdd"
        onSubmit={(event) => {
          event.preventDefault();
          loadResults(); // Calls the loadResults function on form submission
        }}
      >
        <LabelInput
          label={labelContent}
          className="label-input"
          placeholder={placeholderContent}
          value={inputValue}
          name={name}
          type="text"
          onChange={changeField}
        />
        {/* Button to trigger the search for user results */}
        <SimpleButton
          type="button"
          textContent="Rechercher"
          onClick={loadResults}
        />
        {/* Displaying user results */}
        <div className="result">
          {userAvatar && <AvatarFriend userAvatar={userAvatar} />}
          {userFirstName} {userLastName}
        </div>
      </form>
      {/* Button to add the displayed user as a friend */}
      <SimpleButton
        type="button"
        textContent="Ajouter"
        onClick={handleAddFriend}
      />
      {/* Button to go back to the previous page */}
      <div className="buttonBack">
        <SimpleButton
          type="button"
          textContent="Retour"
          onClick={handleGoBack}
        />
      </div>
    </div>
  );
};

export default FormAddFriend;
