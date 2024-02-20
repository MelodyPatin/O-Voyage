import {
  SUBMIT_LOGIN,
  SUBMIT_SIGN_UP,
  handleSuccessfulLogin,
  fetchUserData,
  FETCH_USER_DATA,
  saveUserData,
  handleSuccessfulSignUp,
  FETCH_FRIENDS,
  saveFriends,
  userUpdateSuccess,
  userUpdateFailure,
  USER_UPDATE_REQUEST,
  DELETE_USER,
  userDeleteSuccess,
  userDeleteFailure,
  clickLogout,
  FETCH_USER_BY_MAIL,
  saveUserResultData,
  ADD_FRIEND,
} from '../actions/user';

import { fetchMyTrips } from '../actions/trip';
import api from '../api';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      const { email, password } = store.getState().user;

      // Données à envoyer au format JSON
      const logInJsonData = {
        username: email,
        password,
      };

      // Exécution de la requête
      api
        .post('/login_check', logInJsonData)
        .then((response) => {
          // Traitement de la réponse
          store.dispatch(handleSuccessfulLogin(response.data.token));
          store.dispatch(fetchUserData());
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });

      break;

    case SUBMIT_SIGN_UP:
      const { signUpEmail, signUpPassword, lastnameValue, firstnameValue } =
        store.getState().user;

      // Données à envoyer au format JSON
      const signUpJsonData = {
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: signUpEmail,
        password: signUpPassword,
      };

      // Exécution de la requête
      api
        .post('/user/add', signUpJsonData)
        .then((response) => {
          // Traitement de la réponse
          store.dispatch(handleSuccessfulSignUp());
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });

      break;

    case FETCH_USER_DATA:
      // on doit envoyer le JWT dans le header Authorization de la requête, pour
      // que le serveur nous fournisse NOS recettes préférées
      api
        .get('/user/me')
        .then((response) => {
          store.dispatch(
            saveUserData(
              response.data.firstname,
              response.data.lastname,
              response.data.email,
              response.data.avatarURL
            )
          );
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_USER_BY_MAIL:
      const { searchUsersValue } = store.getState().user;
      const fetchUserByMailData = {
        email: searchUsersValue,
      };
      // on doit envoyer le JWT dans le header Authorization de la requête, pour
      // que le serveur nous fournisse NOS recettes préférées
      api
        .post('/user/search', fetchUserByMailData)
        .then((response) => {
          console.log(response.data);
          const firstName = response.data[0].firstname;
          const lastName = response.data[0].lastname;
          const avatarURL = response.data[0].avatarURL;
          const email = response.data[0].email;
          const userId = response.data[0].id;
          store.dispatch(
            saveUserResultData(firstName, lastName, avatarURL, email, userId)
          );
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case ADD_FRIEND:
      const friendId = action.friendId;
      const addFriendData = {
        id: friendId,
      };
      // on doit envoyer le JWT dans le header Authorization de la requête, pour
      // que le serveur nous fournisse NOS recettes préférées
      api
        .post('/friend/add', addFriendData)
        .then((response) => {
          console.log(response.data);
          window.location.href = `/dashboard`;
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_FRIENDS:
      api
        .get(`/friend`)
        .then((response) => {
          store.dispatch(saveFriends(response.data));
        })
        .catch((error) => {
          console.error(error);
          // Gestion de l'erreur
        });
      break;

    case USER_UPDATE_REQUEST:
      {
        const userState = store.getState().user; // Get user state only once

        const updateUserData = {
          firstname: userState.firstnameValue,
          lastname: userState.lastnameValue,
          email: userState.email,
          password: userState.password,
        };

        try {
          // Log the data you're sending in the update request
          console.log('Update Request Data:', updateUserData);

          // Perform the axios request to update the data
          const firstResponse = await api.put(
            '/user/me/update',
            updateUserData
          );

          // Log the first response
          console.log('First Response:', firstResponse);

          const avatarData = {
            avatar: userState.avatar,
          };

          // Log the data you're sending in the add_avatar request
          console.log('Add Avatar Request Data:', avatarData);

          // Perform the axios request to add the avatar
          const secondResponse = await api.post(
            '/user/me/add_avatar',
            avatarData
          );

          // Log the second response
          console.log('Second Response:', secondResponse);

          // Successful update
          store.dispatch(userUpdateSuccess());

          // Reload user data after the update
          store.dispatch({ type: FETCH_USER_DATA });

          return {
            firstResponse,
            secondResponse,
          };
        } catch (error) {
          // Log any errors that occur
          console.error('Error during API request:', error);

          // Dispatch a failure action
          store.dispatch(userUpdateFailure(error));

          // Propagate the error to be caught in the handleSubmit catch block
          throw error;
        }
      }

      break;

    case DELETE_USER:
      {
        try {
          // Effectuer la requête axios pour supprimer le compte utilisateur
          await api.delete('/user/deletea');

          // Réinitialiser l'état de l'utilisateur
          store.dispatch(userDeleteSuccess('success'));
          store.dispatch(saveUserData('', '', '', ''));
          store.dispatch(clickLogout());
        } catch (error) {
          // Gestion des erreurs
          console.error('Erreur lors de la suppression du compte :', error);
          // Dispatchez une action d'échec si nécessaire
          store.dispatch(userDeleteFailure(error));
        }
      }
      break;
    default:
  }

  next(action);
};

export default userMiddleware;
