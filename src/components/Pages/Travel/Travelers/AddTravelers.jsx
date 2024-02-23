import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import StepSelectAddTravelers from '../../../Reusable/Step/StepSelectAddTravelers';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import { fetchFriends } from '../../../../actions/user';
import './AddTravelers.scss';

const AddTravelers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, []);

  const friends = useSelector((state) => state.user.friends);

  const friendsOptions = friends.map((friend) => ({
    key: friend.id,
    text: `${friend.firstname} ${friend.lastname}`,
    value: `${friend.firstname} ${friend.lastname}`,
  }));

  return (
    <div className="addTravelers">
      <NavBarHeader />
      <ReturnTitle textContent="Ajouter un/des voyageur(s)" />
      <StepSelectAddTravelers
            buttonContent="Ajouter les voyageurs"
            placeholderContent="Rechercher dans les amis"
            labelContent="Modifiez les voyageurs*"
            options={friendsOptions}
          />
    </div>
  );
};

export default AddTravelers;
